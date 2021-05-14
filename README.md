Beep
====

Visual Studio Code plugin (macOS only) that plays the system alert sound whenever the end of the undo/redo stack has been reached through its custom key commands.

Installation
------------

Clone this repository into your extensions directory.

```sh
cd ~/.vscode/extensions
git clone https://github.com/lrdn/vscode-beep.git lrdn.vscode-beep
```

Compile the binary. Requires the Xcode Command Line Tools to be installed.

```sh
cd ~/.vscode/extensions/lrdn.vscode-beep/binary
clang beep.m -framework AppKit -o beep
```

Configuration
-------------

Following key bindings are assigned by default and can be remapped in your settings.

```json
[
    {
        "mac": "cmd+z",
        "command": "vscode-beep.undo",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "mac": "shift+cmd+z",
        "command": "vscode-beep.redo",
        "when": "editorTextFocus && !editorReadonly"
    }
]
```