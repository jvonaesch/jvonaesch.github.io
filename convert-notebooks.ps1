param(
    [Parameter(Position = 0)]
    [string]$Folder
)

$notebookRoot = Join-Path $PSScriptRoot 'assets/data/notebooks'
$outputDirectory = Join-Path $PSScriptRoot 'assets/html/notebooks'

if ([string]::IsNullOrWhiteSpace($Folder)) {
    $notebookDirectory = $notebookRoot
} else {
    $folderPath = if ([System.IO.Path]::IsPathRooted($Folder)) {
        $Folder
    } else {
        Join-Path $notebookRoot $Folder
    }

    if (-not (Test-Path -LiteralPath $folderPath -PathType Container)) {
        throw "Notebook folder does not exist: $folderPath"
    }

    $notebookDirectory = (Resolve-Path -LiteralPath $folderPath).Path
}

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

Get-ChildItem -Path $notebookDirectory -Filter '*.ipynb' -File -Recurse | ForEach-Object {
    jupyter nbconvert $_.FullName --execute --to html --output-dir=$outputDirectory
    if ($LASTEXITCODE -ne 0) {
        throw "nbconvert failed for $($_.Name)"
    }
}
