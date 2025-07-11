function renderPageContainerTemplate() {
    return `
    <div class="receptContainer">
            <div class="receptLimitContainer">
                <h1>Hähnchen-Gemüse-Pfanne mit Kräutern der Provence</h1>
                <div id="imgFood"></div>
                <div id="iconsContainer">
                    <div class="icons"><img src="./assets/icons/clock-regular.svg" alt="Uhrensymbol">
                        <p>&nbsp;&nbsp;10 Min.</p>
                    </div>
                    <div class="icons"><img src="./assets/icons/brain-solid.svg" alt="Gehirnsymbol">
                        <p>&nbsp;&nbsp;simpel</p>
                    </div>
                    <div class="icons"><img src="./assets/icons/calendar-alt-regular.svg" alt="Kalendersymbol">
                        <p>&nbsp;&nbsp;29.11.2024</p>
                    </div>
                </div>
                <div id="borderLine">
                </div>
                <div class="labelMainContainer">
                    <div class="labelContainer" id="labelContainer">

                        <div id="selectOptions" class="ingredientsContainer">
                        </div>

                        <div id="ingredientsContainer">
                        </div>

                    </div>

                    <h2>Zubereitung</h2>

                    <div id="accessoriesContainer">
                    </div>

                    <div id="preparationContainer" class="preparation">
                    </div>

                    <h3>Rezept erstellt von</h3>
                    <div class="creatorNameContainer">
                        <img src="./assets/img/ich.jpg" alt="Bild vom Ersteller">
                        <p>Marco</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function renderInputAndButtonsTemplate() {
    return `
    <label for="input">Zutaten für &nbsp;</label>
                            <input type="number" id="input" max="21" min="1" value="1" required>
                            <button id="buttonPortion2" onclick="preparationForCalculatePortion()">Portionen</button>
                            <button id="buttonPortion" onclick="preparationForCalculatePortionTwo()">Portionen</button>`
}

function renderOptionsTemplate(options) {
    return `
                            <select id="portionSelect" class="portionSelectWidth" required>
                            ${options}
                            </select>`
}

function renderAccessoriesContainerTemplate() {
    return `
    <div class="accessories">
                            <img src="./assets/icons/clock-regular.svg" alt="Uhrensymbol">
                            <p>&nbsp;&nbsp;ca. 10 Minuten</p>
                        </div>
                        <div class="accessories">
                            <img src="./assets/icons/clock-regular.svg" alt="Uhrensymbol">
                            <p>&nbsp;&nbsp;Gesamtzeitzeit ca. 20 Minuten</p>
                        </div>`
}

function renderPreparationContainerTemplate() {
    return `
    <ol>
                            <li>Hähnchenbrust in kleine Stücke schneiden.</li><br>
                            <li>Paprika, Zucchini, Mohrrübe und Tomaten ebenfalls in kleine Stücke schneiden.</li>
                            <br>
                            <li>Zwiebel schälen und in feine Würfel schneiden.</li><br>
                            <li>In einer Pfanne das Olivenöl erhitzen und die Zwiebel darin anbraten, bis sie glasig
                                wird.
                            </li>
                            <br>
                            <li>Die Hähnchenbruststücke hinzufügen und rundherum anbraten, bis sie goldbraun sind.
                            </li><br>
                            <li>Die vorbereiteten Gemüse (Paprika, Zucchini, Mohrrübe, Erbsen, Tomaten) in die
                                Pfanne geben
                                und
                                alles gut
                                vermischen.</li><br>
                            <li>Mit den Kräutern der Provence würzen und bei mittlerer Hitze etwa 5-7 Minuten
                                weiterbraten,
                                bis
                                das Gemüse weich ist.</li><br>
                            <li>Nach Belieben mit Salz und Pfeffer abschmecken.</li>
                        </ol>`
}

function renderStandardTemplate(cssClass, countRef, counter, ingredientName) {
    return `
    <div class="${cssClass}">
        <div id="${countRef}">
            ${counter}
        </div>
        <div class="what">
            ${ingredientName}
        </div>
    </div>`
}

function calculatedPortionTemplate(cssClass, countRef, calculatedPortion, ingredientName) {
    return `
    <div class="${cssClass}">
        <div id="${countRef}">
            ${calculatedPortion}
        </div>
        <div class="what">
            ${ingredientName}
        </div>
    </div>`
}

function calculatetPortionTwoTemplate(cssClass, countRef, calculatedPortionTwo, ingredientName) {
    return `
    <div class="${cssClass}">
        <div id="${countRef}">
            ${calculatedPortionTwo}
        </div>
        <div class="what">
            ${ingredientName}
        </div>
    </div>`
}