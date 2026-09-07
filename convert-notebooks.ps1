$notebookDirectory = Join-Path $PSScriptRoot 'assets/data/notebooks'
$outputDirectory = Join-Path $PSScriptRoot 'assets/html/notebooks'

New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null

Get-ChildItem -Path $notebookDirectory -Filter '*.ipynb' -File | ForEach-Object {
    jupyter nbconvert $_.FullName --execute --to html --output-dir=$outputDirectory
    if ($LASTEXITCODE -ne 0) {
        throw "nbconvert failed for $($_.Name)"
    }
}
