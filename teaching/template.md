---
title: Standard-Template
---

Erfahrungsgemäss werdet Ihr während des Semesters regelmässig Übungen mit einem Codeskelett erhalten, dass etwas unpraktisch zu bedienen sein kann. Im folgenden findet Ihr eine überarbeitete Variante dieses Skeletts, die Euch das Testen erleichtern soll. 

```java
import algorithms.*;

class Main {
  public static void main(String[] args) {
    
    String file = "sample"; // Wählen sie hier die test-datei
    
    In.open("public/%s.in".formatted(file));
    Out.compareTo("public/%s.out".formatted(file));
    
    int t = In.readInt();
    for (int i = 0; i < t; i++) {
      testCase();
    }
    
    In.close();
  }

  public static void testCase() {
    
    Out.println("NULL");

  }
}
```