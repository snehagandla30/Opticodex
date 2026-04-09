XAI_RULES = {
    "W0611": {
        "title": "Unused Import 😅",
        "explain": "You imported something but never used it. Like buying a book and not reading it.",
        "fix": "Remove the import or use it somewhere."
    },
    "E0001": {
        "title": "Syntax Error 🚨",
        "explain": "Python cannot understand this line. Maybe missing colon, bracket, or wrong indentation.",
        "fix": "Check for :, (), quotes, or indentation."
    },
    "C0114": {
        "title": "Missing File Description 📄",
        "explain": "Professional files usually have a description at the top.",
        "fix": 'Add: """This file does XYZ"""'
    }
}