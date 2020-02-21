import React from 'react';
import {
  CodeSnippet,
  Form,
  Checkbox,
  Accordion,
  AccordionItem,
  Button,
} from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

const BubblePage = () => {
  return (
    <div className="myFlex">
      <div>
        <h1 className="myh1">Create Your Own Bubble Waffle Treat</h1>
        <Form>
          <h2 className="myh2">Type of Ice Cream</h2>
          <div class="bx--form-item">
            <div className="bx--radio-button-group bx--radio-button-group--vertical ">
              <div className="bx--radio-button-wrapper">
                <input
                  id="radio-button-1"
                  className="bx--radio-button"
                  type="radio"
                  value="vanilla"
                  name="radio-button--vertical"
                  tabindex="0"
                  defaultChecked
                />
                <label for="radio-button-1" className="bx--radio-button__label">
                  <span className="bx--radio-button__appearance" />
                  <span className="bx--radio-button__label-text">Vanilla</span>
                </label>
              </div>
              <div className="bx--radio-button-wrapper">
                <input
                  id="radio-button-2"
                  className="bx--radio-button"
                  type="radio"
                  value="strawberry"
                  name="radio-button--vertical"
                  tabindex="0"
                />
                <label for="radio-button-2" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance" />
                  <span class="bx--radio-button__label-text">Strawberry</span>
                </label>
              </div>
              <div class="bx--radio-button-wrapper">
                <input
                  id="radio-button-3"
                  class="bx--radio-button"
                  type="radio"
                  value="choc"
                  name="radio-button--vertical"
                  tabindex="0"
                />
                <label for="radio-button-3" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance" />
                  <span class="bx--radio-button__label-text">Chocolate</span>
                </label>
              </div>
              <div class="bx--radio-button-wrapper">
                <input
                  id="radio-button-4"
                  class="bx--radio-button"
                  type="radio"
                  value="bday"
                  name="radio-button--vertical"
                  tabindex="0"
                />
                <label for="radio-button-4" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance" />
                  <span class="bx--radio-button__label-text">
                    Birthday Cake
                  </span>
                </label>
              </div>
              <div class="bx--radio-button-wrapper">
                <input
                  id="radio-button-5"
                  class="bx--radio-button"
                  type="radio"
                  value="mint"
                  name="radio-button--vertical"
                  tabindex="0"
                />
                <label for="radio-button-5" class="bx--radio-button__label">
                  <span class="bx--radio-button__appearance" />
                  <span class="bx--radio-button__label-text">Mint</span>
                </label>
              </div>
            </div>
          </div>
          <fieldset className="bx--fieldset">
            <h2 className="myh2">Toppings</h2>
            <Checkbox labelText="Sprinkles" id="checked" value="sprinkle" />
            <Checkbox labelText="Whipped Cream" id="checked2" value="whipped" />
            <Checkbox labelText="Reese's Pieces" id="checked3" value="reeses" />
            <Checkbox labelText="Oreo Crumbles" id="checked4" value="oreo" />
            <Checkbox
              labelText="Caramel Drizzle"
              id="checked5"
              value="caramel"
            />
            <Checkbox
              labelText="Marshmallow"
              id="checked6"
              value="marshmallow"
            />
            <Checkbox
              labelText="Chocolate Chips"
              id="checked7"
              value="choc-chips"
            />
          </fieldset>

          <div class="bx--form-item">
            <h2 for="text-input-1" className="myh2">
              Additional Toppings?
            </h2>
            <input
              id="text-input-3"
              type="text"
              class="bx--text-input"
              placeholder="Add toppings here."
            />
          </div>
          <div class="bx--form-item">
            <h2 for="text-area-2" className="myh2">
              Give Your Recipe Flavor Text
            </h2>
            <textarea
              id="text-input-2"
              class="bx--text-area"
              rows="3"
              cols="40"
              placeholder="Add flavor text here."
            />
          </div>

          <div class="bx--form-item bx--text-input-wrapper">
            <h2 for="text-input-3" className="myh2">
              Name Your Recipe
            </h2>
            <div class="bx--text-input__field-wrapper">
              <input
                required
                id="text-input-3"
                type="text"
                class="bx--text__input"
                placeholder="Add name here."
              />
            </div>
          </div>
          <div class="bx--form-item">
            <Button>Submit Your Recipe</Button>
          </div>
        </Form>
      </div>
      <div className="rightFlex">
        <h2 className="myh2">FAQ</h2>
        <Accordion>
          <AccordionItem title="What are bubble waffles?">
            A bubble waffle, or egg waffle, is a spherical egg-based waffle
            popular in Hong Kong and Macau, and is an eggy leavened batter
            cooked between two plates of semi-spherical cells. They are usually
            served hot, and often eaten plain, although they may be served with
            fruit and flavors such as strawberry, coconut or chocolate.
          </AccordionItem>
          <AccordionItem title="Where did bubble waffles originate?">
            Before becoming Instagram famous, bubble waffles were commonly found
            at street vendors in Hong Kong, China
          </AccordionItem>
        </Accordion>
        <CodeSnippet className="myCode">
          {`<h1>Hello World</h1><p>For good luck</p>;`}
        </CodeSnippet>
      </div>
    </div>
  );
};

export default BubblePage;
