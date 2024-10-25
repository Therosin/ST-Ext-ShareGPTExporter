import React from "react";

const ExportShareGptDatasetButton: React.FC = () => {
  const handleClick = () => {
    try {
      const context = SillyTavern.getContext();

      const chatId = context.getCurrentChatId();
      if (!chatId) {
        toastr.info("Please select a chat first");
        return;
      }

      // Construct the dataset for exporting
      const dataset = {
        conversation: context.chat.map((message) => ({
          role: message.is_user ? "user" : "assistant",
          content: message.mes,
        })),
        model: "gpt-3.5-turbo",
      };

      if (!dataset.conversation.length) {
        toastr.info("No exportable data found");
        return;
      }

      const timestamp = moment().format("YYYY-MM-DD_HH-mm-ss");
      const blob = new Blob([JSON.stringify(dataset, null, 4)], {
        type: "application/json",
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

  return (
    <a id="option_export_sharegpt_dataset" onClick={handleClick}>
      <i className="fa-lg fa-solid fa-comments"></i>
      <span>Export as ShareGPT Dataset</span>
    </a>
  );
};

export default ExportShareGptDatasetButton;
