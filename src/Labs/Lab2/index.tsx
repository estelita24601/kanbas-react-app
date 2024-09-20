import "./index.css";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel right on the element.
                Although it's very convenient it is considered bad practice and you
                should avoid using the style attribute
            </p>

            {/* SECTION 3.1.3 - ID selectors */}
            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the elements of the same
                    name, e.g., P, we can refer to a specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                    feel
                </p>
            </div>

            {/* SECTION 3.1.4 - class selectors */}
            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's
                    CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>

            {/* SECTION 3.1.5 - using hierarchy */}
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular places in
                        the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3
                            <br />
                            meaning the descendant of some ancestor.
                            <br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span>
                            <br />
                            You can combine these relationships to create specific styles
                            depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 3.1.7 - foreground color */}
            <div id="wd-css-colors">
                <h2>Colors</h2>
                <h3 className="wd-fg-color-blue">Foreground color</h3>
                <p className="wd-fg-color-red">
                    The text in this paragraph is red but
                    <span className="wd-fg-color-green"> this text is in green </span>
                </p>
            </div>

            {/* SECTION 3.1.8 - background color */}
            <div id="wd-css-background-colors">
                <h3 className="wd-bg-color-blue wd-fg-color-white">Background Color</h3>
                <p className="wd-bg-color-red wd-fg-color-black">
                    This background of this paragraph is red but&nbsp;
                    <span className="wd-bg-color-green wd-fg-color-black">
                        the background of this text is green and the foreground is white
                    </span>
                </p>
            </div>

            {/* SECTION 3.1.9 - styling borders */}
            <div id="wd-css-borders">
                <h2>Borders</h2>
                <p className="wd-border-fat wd-border-red wd-border-solid">
                    Solid fat red border
                </p>
                <p className="wd-border-thin wd-border-dashed wd-border-blue">
                    Dashed thin blue border
                </p>
            </div>

            {/* SECTION 3.1.10 - margins and padding */}
            <div id="wd-css-paddings">
                <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
                    Padded top left
                </div>

                <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-colo-yellow">
                    Padded bottom right
                </div>

                <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
                    Padded all around
                </div>
            </div>

            <div id="wd-css-margins">
                <div
                    className="wd-margin-bottom wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
                >
                    Margin bottom //red border yellow inside
                </div>

                <div
                    className="wd-margin-right-left
                    wd-padded-bottom-right
                    wd-border-fat wd-border-blue
                    wd-border-solid
                    wd-bg-color-yellow"
                >Margin left right //blue border yellow inside</div>

                <div
                    className="wd-margin-all-around
                    wd-padding-fat wd-border-fat
                    wd-border-yellow
                    wd-border-solid
                    wd-bg-color-blue
                    wd-fg-color-white"
                >Margin all around //yellow border blue inside</div>
            </div>

            {/* SECTION 3.1.11 - styling corners */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.12 - styling dimensions */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.13 - styling relative position */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.14 - styling absolute position */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.15 - styling fixed position */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.16 - styling z index */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.17 - floating images and content */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.18 - grid layout */}
            <div>
                {/* TODO */}
            </div>

            {/* SECTION 3.1.19 - flexible layout */}
            <div>
                {/* TODO */}
            </div>

        </div>
    );
}
