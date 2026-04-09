def generate_fixes(code, issues):
    lines = code.split("\n")

    for issue in issues:
        if issue["code"] == "W0611":
            line_index = issue["line"] - 1
            if 0 <= line_index < len(lines):
                lines.pop(line_index)

    return "\n".join(lines)