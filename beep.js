const execFile = require('child_process').execFile
const realpath = require('fs/promises').realpath
const platform = require('os').platform
const vscode = require('vscode')

async function activate(context) {
  let textDocumentDidChange = false
  const isDarwin = platform() === 'darwin'
  const beepBinary = await realpath(__dirname + '/binary/beep')

  const createCommand = function (command) {
    return vscode.commands.registerCommand('vscode-beep.' + command, async function () {
      textDocumentDidChange = false
      await vscode.commands.executeCommand(command)

      if (isDarwin && !textDocumentDidChange) {
        execFile(beepBinary)
      }
    })
  }

  vscode.workspace.onDidChangeTextDocument(function () {
    textDocumentDidChange = true
  })

  context.subscriptions.push(
    createCommand('undo'),
    createCommand('redo')
  )
}

module.exports = {
  activate
}