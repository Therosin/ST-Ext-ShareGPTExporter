// src/index.ts
import React2 from "react";
import { createRoot } from "react-dom/client";

// src/components/ExportShareGptDatasetButton.tsx
import React from "react";
var ExportShareGptDatasetButton = () => {
  const handleClick = () => {
    try {
      const context = SillyTavern.getContext();
      const chatId = context.getCurrentChatId();
      if (!chatId) {
        toastr.info("Please select a chat first");
        return;
      }
      const dataset = {
        conversation: context.chat.map((message) => ({
          role: message.is_user ? "user" : "assistant",
          content: message.mes
        })),
        model: "gpt-3.5-turbo"
      };
      if (!dataset.conversation.length) {
        toastr.info("No exportable data found");
        return;
      }
      const timestamp = moment().format("YYYY-MM-DD_HH-mm-ss");
      const blob = new Blob([JSON.stringify(dataset, null, 4)], {
        type: "application/json"
      });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = `${chatId}_sharegpt_${timestamp}.json`;
      downloadLink.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error while exporting dataset:", error);
      toastr.error("An error occurred while exporting the dataset.");
    }
  };
  return /* @__PURE__ */ React.createElement("a", { id: "option_export_sharegpt_dataset", onClick: handleClick }, /* @__PURE__ */ React.createElement("i", { className: "fa-lg fa-solid fa-comments" }), /* @__PURE__ */ React.createElement("span", null, "Export as ShareGPT Dataset"));
};
var ExportShareGptDatasetButton_default = ExportShareGptDatasetButton;

// src/index.ts
jQuery(() => {
  const parentElement = document.querySelector("#option_select_chat");
  if (parentElement) {
    const container = document.createElement("div");
    parentElement.insertAdjacentElement("afterend", container);
    const root = createRoot(container);
    const element = React2.createElement(ExportShareGptDatasetButton_default, null);
    root.render(element);
  } else {
    console.error("Parent element '#option_select_chat' not found");
  }
});
//# sourceMappingURL=extension.js.map
