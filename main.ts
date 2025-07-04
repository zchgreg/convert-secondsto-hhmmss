import { Plugin } from "obsidian";

export default class SecondsToTimePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "convert-seconds-to-hms",
			name: "Convert Seconds to HH:MM:SS",
			editorCallback: (editor) => {
				const selectedText = editor.getSelection();
				const seconds = parseInt(selectedText.trim(), 10);

				if (isNaN(seconds)) {
					new Notice("Selected text is not a number.");
					return;
				}

				const hours = Math.floor(seconds / 3600);
				const minutes = Math.floor((seconds % 3600) / 60);
				const secs = seconds % 60;

				const formatted = `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
				editor.replaceSelection(formatted);
			},
		});
	}
}
