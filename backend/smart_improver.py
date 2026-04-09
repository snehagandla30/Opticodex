import ast

def analyze_improvements(code):
    suggestions = []

    try:
        tree = ast.parse(code)

        for node in ast.walk(tree):
            if isinstance(node, ast.FunctionDef):
                if node.returns is None:
                    suggestions.append({
                        "title": "Add Type Hints ✨",
                        "explain": "Adding type hints makes your code look more professional.",
                        "example": "def add(a: int, b: int) -> int:"
                    })

    except:
        pass

    return suggestions