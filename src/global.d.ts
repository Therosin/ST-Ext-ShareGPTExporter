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
export {};
// Augment the global type definitions to include custom SillyTavern context and other global objects
// You can also add custom properties to the SillyTavern context and access them globally
// For example, you can add `SillyTavern.getContext().customProperty` and `SillyTavern.getContext().customFeature()`
// and access them globally
//
// Note: You can add any global object you want to access globally in this file
// Note: This file will not be transpiled by TypeScript, so you can add any global object you want to access globally
// without having to import them in each file
declare global {
    const toastr: typeof import("npm:toastr");
    const jQuery: typeof import("npm:jquery");
    
    interface SillyTavern {
        getContext(): SillyTavernContext;
        // customFeature(): void;
        // additionalInfo: {
        //     version: string;
        //     initialized: boolean;
        // };
    }

    // Add custom properties to the SillyTavern context
    interface SillyTavernContext {
        customProperty: string;
    }
}
