import React from 'react';
import { createRoot } from 'react-dom/client';
import ExportShareGptDatasetButton from "./components/ExportShareGptDatasetButton.tsx";

// Function to render the button component within the DOM using jQuery for insertion
jQuery(() => {
    const parentElement = document.querySelector('#option_select_chat');
    if (parentElement) {
        const container = document.createElement('div');
        parentElement.insertAdjacentElement('afterend', container);

        const root = createRoot(container);
        const element = React.createElement(ExportShareGptDatasetButton, null);

        root.render(element);
    } else {
        console.error("Parent element '#option_select_chat' not found");
    }
});