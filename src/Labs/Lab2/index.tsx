import "./index.css";
import ForegroundColors from "./ForegroundColors";
import ReactIconsSampler from "./ReactIcons";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Paddings from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";


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
            </div> <br />

            {/* SECTION 3.1.7 - foreground color */}
            <ForegroundColors />

            {/* SECTION 3.1.8 - background color */}
            <BackgroundColors />

            {/* SECTION 3.1.9 - styling borders */}
            <Borders />

            {/* SECTION 3.1.10 - margins and padding */}
            <Paddings />
            <Margins />

            {/* SECTION 3.1.11 - styling corners */}
            <Corners />

            {/* SECTION 3.1.12 - styling dimensions */}
            <Dimensions />

            {/* SECTIONS 3.1.13 to 3.1.15 - positioning elements*/}
            <Positions />

            {/* SECTION 3.1.16 - styling z index */}
            <Zindex />

            {/* SECTION 3.1.17 - floating images and content */}
            <Float />

            {/* SECTION 3.1.18 - grid layout */}
            <GridLayout />

            {/* SECTION 3.1.19 - flexible layout */}
            <Flex />

            {/* SECTION 3.2 - react icons */}
            <ReactIconsSampler />

        </div>
    );
}
