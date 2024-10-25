// deno-lint-ignore-file no-explicit-any
// Copyright (C) 2024 Theros <https://github.com/therosin>
// 
// This file is part of SillyTavern-Extensions.
// 
// SillyTavern-Extensions is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// SillyTavern-Extensions is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with SillyTavern-Extensions.  If not, see <https://www.gnu.org/licenses/>.

/**
 * This file provides detailed type definitions for the Context object returned by SillyTavern's getContext() method.
 * It is designed to be used as part of the global augmentation of SillyTavern within `global.d.ts`, 
 * allowing developers to have a full understanding of the properties and methods available within the context.
 */

// Base Context type definition that can be expanded via augmentation
interface SillyTavernContext {
    chat: ChatMessage[];
    characters: CharacterData[];
    groups: any[];
    name1: string;
    name2: string;
    characterId: string;
    groupId: any;
    chatId: string;
    getCurrentChatId: () => string;
    getRequestHeaders: () => Record<string, string>;
    reloadCurrentChat: () => void;
    renameChat: (newName: string) => void;
    saveSettingsDebounced: () => void;
    onlineStatus: string;
    maxContext: number;
    chatMetadata: ChatMetadata;
    streamingProcessor: any;
    eventSource: EventSource;
    eventTypes: EventTypes;
    addOneMessage: (message: ChatMessage) => void;
    generate: () => void;
    stopGeneration: () => void;
    getTokenCount: () => number;
    extensionPrompts: ExtensionPrompts;
    setExtensionPrompt: (prompt: ExtensionPrompts) => void;
    updateChatMetadata: (metadata: ChatMetadata) => void;
    saveChat: () => void;
    openCharacterChat: (characterId: string) => void;
    openGroupChat: (groupId: string) => void;
    saveMetadata: (metadata: ChatMetadata) => void;
    sendSystemMessage: (message: string) => void;
    activateSendButtons: () => void;
    deactivateSendButtons: () => void;
    saveReply: () => void;
    substituteParams: (params: Record<string, string>) => string;
    substituteParamsExtended: (params: Record<string, string>, options: any) => string;
    SlashCommandParser: () => void;
    executeSlashCommandsWithOptions: (options: any) => void;
    registerSlashCommand: (command: string, callback: () => void) => void;
    executeSlashCommands: () => void;
    timestampToMoment: (timestamp: number) => string;
    registerHelper: (name: string, callback: () => void) => void;
    registerMacro: (name: string, callback: () => void) => void;
    unregisterMacro: (name: string) => void;
    registedDebugFunction: () => void;
    renderExtensionTemplate: (template: string, data: any) => string;
    renderExtensionTemplateAsync: (template: string, data: any) => Promise<string>;
    registerDataBankScraper: (scraper: () => void) => void;
    callPopup: (popupType: string, message: string) => void;
    callGenericPopup: (title: string, message: string) => void;
    showLoader: () => void;
    hideLoader: () => void;
    mainApi: string;
    extensionSettings: ExtensionSettings;
    ModuleWorkerWrapper: () => void;
    getTokenizerModel: () => string;
    generateQuietPrompt: () => void;
    writeExtensionField: (field: string, value: any) => void;
    getThumbnailUrl: (characterId: string) => string;
    selectCharacterById: (characterId: string) => void;
    messageFormatting: (message: string) => string;
    shouldSendOnEnter: () => boolean;
    isMobile: () => boolean;
    t: (key: string) => string;
    translate: (key: string) => string;
    tags: any[];
    tagMap: Record<string, string[]>;
    menuType: string;
    createCharacterData: any;
    event_types: any;
    Popup: () => void;
    POPUP_TYPE: Record<string, number>;
    POPUP_RESULT: Record<string, number | null>;
    registerFunctionTool: (name: string, tool: () => void) => void;
    unregisterFunctionTool: (name: string) => void;
}

// Supporting types used within the Context
interface ChatMessage {
    name: string;
    is_user: boolean;
    is_system: boolean;
    send_date: string;
    mes: string;
    extra: Record<string, any>;
}

interface CharacterData {
    name: string;
    description: string;
    personality: string;
    first_mes: string;
    avatar: string;
    chat: string;
    mes_example: string;
    scenario: string;
    create_date: string;
    talkativeness: string;
    fav: boolean;
    creatorcomment: string;
    spec: string;
    spec_version: string;
    // @ts-expect-error - This is a partial type definition
    data: CharacterInnerData;
    tags: any[];
    json_data: string;
    date_added: number;
    chat_size: number;
    date_last_chat: number;
    data_size: number;
}

interface CharacterInnerData {
    name: string;
    description: string;
    personality: string;
    scenario: string;
    first_mes: string;
    mes_example: string;
    creator_notes: string;
    system_prompt: string;
    post_history_instructions: string;
    tags: any[];
    creator: string;
    character_version: string;
    alternate_greetings: any[];
    extensions: CharacterExtensions;
    character_book: CharacterBook;
}

interface CharacterExtensions {
    talkativeness: string;
    fav: boolean;
    world: string;
}

interface CharacterBook {
    entries: CharacterBookEntry[];
    name: string;
}

interface CharacterBookEntry {
    id: number;
    keys: string[];
    secondary_keys: any[];
    comment: string;
    content: string;
    constant: boolean;
    selective: boolean;
    insertion_order: number;
    enabled: boolean;
    position: string;
    extensions: CharacterBookEntryExtensions;
}

interface CharacterBookEntryExtensions {
    position: number;
    probability: any;
    useProbability: boolean;
}

interface ChatMetadata {
    chat_id_hash: number;
    note_prompt: string;
    note_interval: number;
    note_position: number;
    note_depth: number;
    note_role: number;
    tainted: boolean;
    timedWorldInfo: TimedWorldInfo;
}

interface TimedWorldInfo {
    sticky: Record<string, any>;
    cooldown: Record<string, any>;
}

interface EventSource {
    events: Record<string, (() => void)[]>;
}

interface EventTypes {
    APP_READY: string;
    EXTRAS_CONNECTED: string;
}

interface ExtensionPrompts {
    value: string;
    position: number;
    depth: number;
    scan: boolean;
    role: number;
}

interface ExtensionSettings {
    apiUrl: string;
    apiKey: string;
    autoConnect: boolean;
    notifyUpdates: boolean;
    disabledExtensions: any[];
    expressionOverrides: any[];
}

// This file is intended to be imported into global.d.ts to augment the SillyTavernContext
// and should not be included directly in build output.
