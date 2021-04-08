// @ts-nocheck
/** @jsxRuntime classic */
/** @jsx tsx */

import Widget from "@arcgis/core/widgets/Widget";
import { subclass, property } from "@arcgis/core/core/accessorSupport/decorators";
// import { fetchMessageBundle, onLocaleChange } from "@arcgis/core/intl";

// import { messageBundle } from "@arcgis/core/widgets/support/decorators/messageBundle";
import { tsx } from "@arcgis/core/widgets/support/widget";
import './HelloWorld.css';

const CSS = {
    base: "esri-hello-world",
    emphasis: "esri-hello-world--emphasis"
};

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends Widget {
    // constructor(params?: any) {
    //     super(params);
    // }
    @property()
    eventName: string = "UserConference";

    @property()
    eventYear: string = "2020";

    @property()
    emphasized: boolean = false;

    // @property()
    // @messageBundle("ts-tutorial-app/assets/widgetT9n/widget")
    // messages = null;

    render() {
        const greeting = this._getGreeting();
        const classes = {
            [CSS.emphasis]: this.emphasized
        };

        return (
            <div class={this.classes(CSS.base, classes)}>
                {greeting}
            </div>
        );
    }

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    private _getGreeting(): string {
        // return `${this.messages.greeting} ${this.firstName} ${this.lastName}!`;
        return `Welcome to the ${this.eventName} ${this.eventYear}`;
    }

}

export default HelloWorld;