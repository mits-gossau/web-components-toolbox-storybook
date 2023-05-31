// Form.stories.js
import { html } from 'lit-html'

import(
  '../../web-components-toolbox/src/es/components/molecules/form/Form'
).then((module) => self.customElements.define('m-form', module.default))

export default {
  title: 'Molecules/Form',
  component: 'm-form'
}

export const Default = () =>
  html`
    <m-form>
      <div class="umbraco-forms-page" id="d45d33f6-90b2-4345-9938-9bbaab73d830">
        <fieldset
          class="umbraco-forms-fieldset"
          id="007609e5-7996-4e3a-aae6-665ccf06c4c5"
        >
          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div class=" umbraco-forms-field firma shortanswer">
                <label
                  for="4932224a-57c2-46b0-d353-231fc2728e9c"
                  class="umbraco-forms-label"
                >
                  Firma
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <div class=" umbraco-forms-field firma shortanswer">
                    <div class="col-md-12">
                      <div>
                        <a-icon-paperclip
                          hover-on-parent-element
                        ></a-icon-paperclip>
                        <span>&nbsp;Upload</span>
                      </div>
                      <input type="file" value="file" />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="4932224a-57c2-46b0-d353-231fc2728e9c"
                    id="4932224a-57c2-46b0-d353-231fc2728e9c"
                    data-umb="4932224a-57c2-46b0-d353-231fc2728e9c"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="4932224a-57c2-46b0-d353-231fc2728e9c"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class="umbraco-forms-field formsformorderdeliverynotes checkbox"
              >
                <input
                  type="checkbox"
                  name="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  id="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  value="true"
                  data-umb="091023b2-4476-489d-9084-9f3b47e9a4ce"
                />
                <input
                  type="hidden"
                  name="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  value="false"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  data-valmsg-replace="true"
                ></span>
                <label
                  for="091023b2-4476-489d-9084-9f3b47e9a4ce"
                  class="umbraco-forms-label"
                >
                  Lieferscheine
                </label>
              </div>
              <div class=" umbraco-forms-field anrede singlechoice alternating">
                <label
                  for="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                  class="umbraco-forms-label"
                >
                  Anrede
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <div
                    class="  radiobuttonlist"
                    id="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                    data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                  >
                    <input
                      type="radio"
                      name="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                      id="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                      data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                      value="Frau"
                    />
                    <label for="ee00474a-73ca-4440-e19e-2bbf1c6ec750_0"
                      >Frau</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                      id="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                      data-umb="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                      value="Mann"
                    />
                    <label for="ee00474a-73ca-4440-e19e-2bbf1c6ec750_1"
                      >Mann</label
                    >
                    <br />
                  </div>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="ee00474a-73ca-4440-e19e-2bbf1c6ec750"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field vornamename shortanswer mandatory"
              >
                <label
                  for="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                  class="umbraco-forms-label"
                >
                  Vorname Name <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                  id="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                  data-umb="31abdc18-3dd5-43dc-dfba-67104a7de7e0" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Vorname Name"
                  aus." />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="31abdc18-3dd5-43dc-dfba-67104a7de7e0"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field themawählen dropdown mandatory alternating"
              >
                <label
                  for="2e60bae1-cf2f-492f-fd4c-f6255d3ce245"
                  class="umbraco-forms-label"
                >
                  Thema wählen <span class="umbraco-forms-indicator">*</span>
                </label>

                <span class="umbraco-forms-tooltip help-block"
                  >Bitte wählen Sie eine Option aus.</span
                >

                <div class="umbraco-forms-field-wrapper">
                  <select
                    class=""
                    name="2e60bae1-cf2f-492f-fd4c-f6255d3ce245"
                    id="2e60bae1-cf2f-492f-fd4c-f6255d3ce245"
                    data-umb="2e60bae1-cf2f-492f-fd4c-f6255d3ce245"
                    data-val="true"
                    data-val-required="Please provide a value for Thema wählen"
                  >
                    <option value=""></option>
                    <option value="Frage">Frage</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Wunsch">Wunsch</option>
                  </select>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="2e60bae1-cf2f-492f-fd4c-f6255d3ce245"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field telefon shortanswer alternating">
                <label
                  for="da2a663b-e910-4f16-9221-351a31708ed2"
                  class="umbraco-forms-label"
                >
                  Telefon
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="tel"
                    name="da2a663b-e910-4f16-9221-351a31708ed2"
                    id="da2a663b-e910-4f16-9221-351a31708ed2"
                    data-umb="da2a663b-e910-4f16-9221-351a31708ed2"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="da2a663b-e910-4f16-9221-351a31708ed2"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field email shortanswer mandatory">
                <label
                  for="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                  class="umbraco-forms-label"
                >
                  E-Mail <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="email"
                  name="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                  id="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                  data-umb="c5b209f0-0703-4004-cdc8-b81160de0cb5" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "E-Mail" aus"
                  data-val-regex="Bitte geben Sie eine gültige "E-Mail" ein."
                  data-val-regex-pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="c5b209f0-0703-4004-cdc8-b81160de0cb5"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field plz shortanswer mandatory alternating"
              >
                <label
                  for="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                  class="umbraco-forms-label"
                >
                  PLZ <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                    id="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                    data-umb="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                    class="text "
                    value=""
                    maxlength="4"
                    data-val="true"
                    data-val-required="Bitte geben Sie eine PLZ an"
                    data-val-regex="Bitte geben Sie eine PLZ an"
                    data-val-regex-pattern="^[0-9]*$"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="7fc7c299-4737-48e7-bdd1-17cbe13682f5"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field ort shortanswer mandatory">
                <label
                  for="06d3b412-de66-4e8d-c240-7d470e395fb8"
                  class="umbraco-forms-label"
                >
                  Ort <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="06d3b412-de66-4e8d-c240-7d470e395fb8"
                    id="06d3b412-de66-4e8d-c240-7d470e395fb8"
                    data-umb="06d3b412-de66-4e8d-c240-7d470e395fb8"
                    class="text "
                    value=""
                    maxlength="255"
                    data-val="true"
                    data-val-required="Bitte geben Sie einen Ort an"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="06d3b412-de66-4e8d-c240-7d470e395fb8"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field strasse shortanswer mandatory alternating"
              >
                <label
                  for="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                  class="umbraco-forms-label"
                >
                  Strasse <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                    id="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                    data-umb="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                    class="text "
                    value=""
                    maxlength="255"
                    data-val="true"
                    data-val-required="Bitte geben Sie eine Strasse an"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="3a7bc378-f85a-4f2a-9927-43bdb5ea5818"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field hausnummer shortanswer">
                <label
                  for="afd8a0aa-97d0-451c-a918-7f911462df9d"
                  class="umbraco-forms-label"
                >
                  Hausnummer
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="afd8a0aa-97d0-451c-a918-7f911462df9d"
                    id="afd8a0aa-97d0-451c-a918-7f911462df9d"
                    data-umb="afd8a0aa-97d0-451c-a918-7f911462df9d"
                    class="text "
                    value=""
                    maxlength="4"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="afd8a0aa-97d0-451c-a918-7f911462df9d"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field zusatz shortanswer alternating">
                <label
                  for="ef3c60c9-d487-46da-8a43-cd007e01874a"
                  class="umbraco-forms-label"
                >
                  Zusatz
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="ef3c60c9-d487-46da-8a43-cd007e01874a"
                    id="ef3c60c9-d487-46da-8a43-cd007e01874a"
                    data-umb="ef3c60c9-d487-46da-8a43-cd007e01874a"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="ef3c60c9-d487-46da-8a43-cd007e01874a"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field bemerkungen longanswer">
                <label
                  for="7d670178-6318-48d4-e9fe-b40367486a47"
                  class="umbraco-forms-label"
                >
                  Bemerkungen
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <textarea
                    class=""
                    name="7d670178-6318-48d4-e9fe-b40367486a47"
                    id="7d670178-6318-48d4-e9fe-b40367486a47"
                    data-umb="7d670178-6318-48d4-e9fe-b40367486a47"
                    rows="3"
                    cols="20"
                  ></textarea>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="7d670178-6318-48d4-e9fe-b40367486a47"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field recaptcha recaptchav3withscore mandatory alternating"
              >
                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="hidden"
                    id="34be9a13-622b-431e-de0a-746392b3dd23"
                    name="g-recaptcha-response"
                  />
                  <script type="application/javascript">
                    (function (window, document) {
                      var hiddenField = document.getElementById(
                        "34be9a13-622b-431e-de0a-746392b3dd23"
                      );
                      var timerFunction = function () {
                        window.grecaptcha
                          .execute("6Lc_DDQUAAAAANpNTT_NzZ61YWhKy6swlfaLcQjB", {
                            action: "umbracoform_submit",
                          })
                          .then(function (token) {
                            // Enable the submit button now we have a token
                            hiddenField.form
                              .querySelector("[type=submit]")
                              .removeAttribute("disabled");
                            hiddenField.value = token;
                          });
                        setTimeout(timerFunction, 60 * 1000);
                      };

                      document.addEventListener(
                        "DOMContentLoaded",
                        function () {
                          // Disable the submit button for this form, until we actually have a key from Google reCAPTCHA
                          hiddenField.form
                            .querySelector("[type=submit]")
                            .setAttribute("disabled", "disabled");

                          window.grecaptcha.ready(function () {
                            timerFunction();
                          });
                        }
                      );
                    })(window, document);
                  </script>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="34be9a13-622b-431e-de0a-746392b3dd23"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <div style="display: none" aria-hidden="true">
          <input type="text" name="211c67e98e734821aef0cf49f6207760" />
        </div>

        <div class="umbraco-forms-navigation row-fluid">
          <!-- todo: add policy from m4music? made both as dictionary... -->
          <p>
            Die Bearbeitung Ihrer Personendaten erfolgt gemäss unserer
            <a
              rel="noopener"
              href="https://www.migros.ch/de/datenschutz.html"
              target="_blank"
              >Datenschutzerklärung</a
            >. Dieses Formular ist durch reCAPTCHA geschützt, die
            <a
              rel="noopener"
              href="https://policies.google.com/privacy"
              target="_blank"
              >Google Privacy Policy</a
            >
            und
            <a
              rel="noopener"
              href="https://policies.google.com/terms"
              target="_blank"
              >Terms of Service</a
            >
            finden Anwendung.
          </p>
          <div class="col-md-12">
            <input
              type="submit"
              class="btn primary"
              value="Submit"
              name="__next"
              data-umb="submit-forms-form"
            />
          </div>
        </div>
      </div>
    </m-form>

    <input
      name="ufprt"
      type="hidden"
      value="95514D447611C9386B52435FE4B0DFD50AB4260E461F3D89BB69DED5B9EDA72ED57AE37CD66CEA06CAFC5853148A798B7C188408D7C912A37BBD2ADD2DF8F085E141AEF86B5DB5492C8DF1C8A677EAADFC66FEAA4FD80E0DBAA7A8CB295A55FA35487874062AA2E64F7A99EC5F7979555691859A13B33BA62E51F061F1BAAFB1BF97680158CD5558B0ACB50958B0B361"
    />

    <div
      class="umbraco-forms-form-config"
      style="display: none"
      data-id="211c67e98e734821aef0cf49f6207760"
      data-serialized-page-button-conditions="{}"
      data-serialized-fieldset-conditions="{}"
      data-serialized-field-conditions="{}"
      data-serialized-fields-not-displayed="{}"
    />
  `

export const Variant = () => html`
  <a-button namespace="button-primary-">Hello</a-button>
  <hr />
  <m-form use-html-submit>
    <!--<script
      src="/App_Plugins/UmbracoForms/Assets/promise-polyfill/dist/polyfill.min.js"
      type="application/javascript"
    ></script>
    <script
      src="/App_Plugins/UmbracoForms/Assets/aspnet-validation/dist/aspnet-validation.min.js"
      type="application/javascript"
    ></script>-->

    <div
      id="umbraco_form_0074f0521507473781e0859a04de693d"
      class="umbraco-forms-form früchteaboswissgrid umbraco-forms-betriebsrestaurants"
    >
      <!--< action="/landingpages/swissgrid/fruchteabo/"
      enctype="multipart/form-data" method="post">-->
      <input
        name="__RequestVerificationToken"
        type="hidden"
        value="poY987nSJ5_Q2axHJ0-5lsDi1e9Xwq1nthPge4se_Fo3tfktgeHSIXnYxyO3dtWS2eq6TdPRj9GTXs9hVOcd_iOLU6EPqbkC1-HFAGpD0801"
      /><input
        data-val="true"
        data-val-required="The FormId field is required."
        name="FormId"
        type="hidden"
        value="0074f052-1507-4737-81e0-859a04de693d"
      /><input
        name="FormName"
        type="hidden"
        value="Früchteabo Swissgrid"
      /><input
        data-val="true"
        data-val-required="The RecordId field is required."
        name="RecordId"
        type="hidden"
        value="00000000-0000-0000-0000-000000000000"
      /><input name="PreviousClicked" type="hidden" value="" /><input
        name="Theme"
        type="hidden"
        value="betriebsrestaurants"
      />
      <input type="hidden" name="FormStep" value="0" />
      <input
        type="hidden"
        name="RecordState"
        value="OTgyOEVGMEQwOTdCRjcwRTM2QTQ1NEFFQTNDMDQ2OTIzREE3RjU2RDVCM0Y0RkZGNDZGQjI2MDhFRDVGMzQ4QjJDMkQxMjU5RTZGRTFCNTU5RjVGMDg2MUIyNEREMEQ0MTJFQkIwOTcyM0VFQjc2QjAxRDI3NTkzNjI5M0YwMDQ1QjdEQkNBQUJGNDlDNTRDNUZBNTY0MkQ0QzBCRjFFQ0EwQTE0NDhFRjVFRjVGQjgzRDNDQ0M1RkI4MzdFNjlFOUU3NjMwOTE5QzNDODczOEM3OTA5ODg2REI0QTNFM0IyRTc3MjJGQkU0NjhENUM2ODEwRUY2MThFRjVDNTY3NDM0REJCNEE5QkQxOEVEMEZCN0FENzU2MTZDQUFEMDE5NEJDQTQwOURDQzZDNDM0Q0E0MkM0ODIxMzU2NTc1QjkwRDU4NjI5MzZDM0U0NjFDMTc2NzM0QjBENkJFMjAyREZBNjYzNTEyMjdEQ0JBMTQyMzcxNTg4MUEwNDkwRDlBRjkyRjdENjg0NTcyRTg3ODU3REY1QkI4MjI4OUU4NzM2NjFBRjQ5QTBFQzQ0QjZEMjEwQ0JBMTUzRUVBMjExMzhDQjkzOTNBNzUxODA5RDVENUE3RkM2RjEwQzA3MEY2NzdDMkY4QzgzOUQ5NEM3RTVBOTc3QzQzMDU2RTMwRDc4NkNEODRCMkU2NzkyQzE0RDBBMUI4MzcyODE0QTU2OTU0OTU2NTM4MkFBQUM0MDQ5QzhCMUE3RjUxRTY1RjMyMDM4ODk4NzI2ODUyREZFMjg2RDAzNDQ5NUQ1RDgwMEUzQUUxM0U0RURBRDRENTJDQTBFNzNGQTM1NEU3RUNBNDlDMzNCMkVDRkMyNkE2QkZFQUQ4NjFDMUZBNEZGRDk4Q0U3Q0VGQzQ0RUQyODQ5NDk0OTgxRDREMERERDQyOUVFQ0IyQTRCNTM5NTk4QkI0RjkwQ0MxQjAzNEY1RTZGOEFCOTFDQzFERTVCQUI3RkI2NzBDMzQ0ODg0ODQyQzE3NUMzRDVFQzgxMzE1QzRFMUQ2NDUxRjQ5REVCRDREQ0VFRTlBQkUyMzhFQzA0QTgzMTQ1RTM5QkY1RjRCQjM0QzEwQTdCNTJDMkMzQUIxRTE0MkI1NzJFN0QwNEM5MDIwMjM5OEU5RDA3QTZDRDlDODAzNzU5NDIxRTNBOEYzNUJCNjRFMEI0MzRENzhBRDJDRDc4MDA4RkUyMDY2NDIzRkU5Qjg3Njc1RjFDNzU2REU4OTA3RDQyMjlBQTc4NTA5MUQxREE5RERBMjEwOTQwQzg3NEEwNjZFM0Y1ODExMjMzMDk0MzE2Rjk4REYzMjQ4RTYyQjA5RTIwRTgwNDIyREVEMzFBQUQ3RENDNjYxREVGMTJCRjQ0NDdCOUQ3RjU5RDhBQzkyODEzQzkyNUNCQTY5RjU0MUU4MDE1RjdBOEVEMUNFM0UwQzk2NDlDQzAwRDE5MUM5QTg3NDVEODdBQUU4RkQxQkRGRTRGMDlBMkM2NkI3ODI2NjU1QTY4MDk2MkNCNURBMTBFRTQyODRENEE0MjFDNTMyMTBFQ0U3OTNDMTE1REFGQkI3ODBERjgyRjA5RjNDM0NERUMzNDQ5ODY2NTAxN0M0NDMzQUI5NTc0NEU1QTREREMxRDVFQkM4RTBFOUI3NEVFNDc0Nzk5OUYwMUQ0NUFBQ0NGNURBMTk5NDU2OUI3NkJDRDk0NzQ2NjgzQjYyRTcyODJFQzk3QzZENjY0NEQzNjY0M0IyQUM5MjI5RjZCRTFFMEVGNDQ1ODFGREY5QjNDRDc0REYxMDY0NjI4MDYyRUI0QUQwRDY4OEE4MEJBODVBMjdFQjdDQkU0MjEwRDI4OTE0ODVCQkFCMkJDMzZFQkUyOUQ3NjM2OEY1MkU4OTJGQ0QwRjlBNDkzQ0U4N0Q2MkM4NjU4OTlFNDFFRjZCMTM1NDMxNTVCMjZGRjcwQzE3NTgwMzQyNjQ2OTFDNUIxNzVFMjE1NTNENzQxRUJCNUU0NTJERDRDQ0E1RERDMEU1NjE5MTUwNzlBNDVCNURFMkIwQUE1RENDRjQzQUFEQjlFRkI1REU3OTg4OTQxMTkxQTE2NzBGNUE4NzBFQTM5NDc1M0NENTU1RkZDQ0UxNDFCQTI4QjdBOTlFN0RFREY5QjczMDBDRjUzODY3NDkyRDE5QzFCMjlENEMwQTA2QUEyRDAyRUREOEI5NEM5RTAzNUE0MTM4MDRERTM4MkZBMjk3RDhDREE0RTFFNDkyMTE3MUVBMTg3NERGQUM5OUVDMjI0MUEwNkE3NjcxN0MxODdBMzI4N0FGNTYwMzlGOTlGNDUwQjFEM0U3Q0EzRDQwMkMwNDIxN0I4MDA0RkQ3MzBEMDkwMjdBRUFGMjIyRDlFQ0RFODBEMUMxNUE0MzBGQ0ZDNDM4MjA0REEyQzQzOEVCMzRCMDJCRERCMEMyNzg5NzJDRDc3MDUwNTlFMUJBMjk5RjVBRDJDMUI3RUM5OTY4QTZCRDBBNEM4MEFBM0E0RURBMDBEQjhBQ0U3OUEwRUYyQUNFMUI5OTc0NTEwOEVBMkQ4RUVGNEVFNDdFQjAyQTRCQUYwRjYyQTZGRUZCQTJBMDAzMzY1ODE4MDNGRDhFQzJFQjcwODVBMDRGNTNBM0JCQThDOTRGNEE0MjdGRkM4OTI0M0I4RENGMkY3MjkxNTM5MzM2MURDQUMxMzQ3RjI0MEQ1NTc5MzVDRjAxQkNENzM5QkQyNEE1RkQ0MDY2RjE2RjdENDc1Q0VDRTY3MjdBNzU0NTFBNjIzQTNEQzM4MkQ0NzkzOEQ3NzE3QjIwODk1NjcwOEVEQUU0Q0E2RjhFMzA5REZFMTU4ODQwQjgzRUE5QURGNzZDMEQ3RjdDRUIyMg0KNkFDREEyMEJCNDlGNEE1REFBREJBNERGMDhGQjIzMjg4MTkyQzJBRjA5NTk4NzZBNjcwQkJEMUFCMDE5MTc0RDc3NkU5NzQ3MzI2MUM5RTQwNkEyODc4Rjk5MTczOEEyQUU4NDNEMjlEM0Q4QTI1NjJDN0VCMTI1ODlCODgzQ0NGNjM5NDg0Qjg1RjNGNjYyMUVCQTA1RUE5QkQ3MDFCODYzQUY4QTYyREQ4MUYxQzE0QUU1RUEyMkI3M0Q5NUE0M0U0OTZEM0M3OEI0OUZFQjVGREZBMjVGNDNENTYzMzFGMzdGMkU4NTA3OTJFRkNEQkYyOTcxQzU5MkZEMzBCQzcxMjEzRTVBMDFEMTk0NTdBM0I3OEIzNUIxODVBQ0IzNjU1NzIyN0EzRTZDQTI3N0MwNTNBQzFEQjdCMzlDMkNFMzgzRUM5MzhBQUNCRTBDQUY4OTNFQjA4OTdFRkNBRDRENUQ3Q0NCQTRCOEQ4QTNCNzU2NjgxMkM3OTgzMzRBN0VENDk1MTlDRDA4QTVBMjNCMDUwNEVCNzkxRDM2RkFGRTYyMjVCRTg4NUVERkRCRUREQUYwRUI3NUJDODU4N0ZDNTdGREYwQTQ4MUEwOTRGNTE4RjRGREZFRTFEMkE1MUQ2RTBBMTc1QkZERTdDOTQ3QUUzMUYwN0Q3OEZBOTg1MTBBREFFMTA3RDA1MDBEMDVDOTA3MTc4RDQzQUM5N0VDMjZFM0FCQkQzM0VGM0FDNEVEMUZERjNGM0NBRkFEMzJCNEY4QjZBQ0YwRDdGMkEzQTJCRERGOTg4OEVGM0IxMzkyQzM3QzBFREZFRDI5MDg2MThCQjEyOEVDOUQ4RUVCQzVGNzE0QzE0QUVDQ0UxMEFBODUwOEMxOUQ5REFFQjdCMEI3MDcyRUI0QzY0MDAyNjVCMTQ5NUVBQzkzNzhGMUYzOUYxRDgwQjk4RDc5NTgzNzY4NEQxOTYzNENEQjUxNjY4RDQ5NkFCRjlEMzRBQzdCOTMyNUE5QUVCNDc2Q0Q3RjNDQzY4M0MyNzkyMzYzM0NGQTY5Q0FFM0E4QkU1RkNFQjkwNzZDNjgxQUU5MjNCNTlGMkMyMkM3QjgyN0M0RUMzMTA2RkUzOEMzRTg0RDIwMzkwRjNGNUZEQjdFNjI4RjAxNDQ3M0YwRkZGNjRDNkRFMTBDREE5OThGQzlFQkVBN0E3NDZBMDI3RDZDRDZCQTU2Qzc5QzRDN0Q1NEU0RTk0QjAwNzUxRjU0M0MyOTg4NDVGMDM5MzY0MEZGQjI5RUE1QTg3NUNBOUMwNzU4MERDMDUxREIzQjQ0NTU4RDdFRTJCODJCREMzNDBBODhCNjg3RUQ1MDQzMTUxOTZEOTI3QzA1NDEwRjBFNEZBMDlFNzA1MEY0NTY1NjU0MUQyQzc5RTdCQzIwNkRBRTBBMzNFOTgyNTUyRDk2ODFDMjNDQjgxNkVCMzgyMTg2NDBFRTMyNkJGNTVDMkU2MUY2QTNCNTFGMjA3MzRDNkQ3RUYyOUE3Qjk1NDc4NEQ1MDJDMDIzNUZBM0YxRTFEQjVCNjI1RkE1OTA0QzI3MDQ5N0NFNDRBOTJGQzIwNTE1OEQxNDZFRUY2ODhCQThDNDY4N0I3QTJDMTM3OUE2MDg3MjUzOUFGNkU5MzZDNzRFNjA1QkVBOTk0MTYyNjkxNTgxOEUyQ0FGODkyRjJFMTYzNjJCNENCQUNBRTBFNDlDODc1MkM1RjUyQzFCRTgzNEUxNzEwMDk4QTk4RkFGOEIxOTY4QzM4QjY2NkJFOTkwNjE5NTVFMjIwQTQ4QTE2MTFCNzlFQkQ5QkFEMzhDQTMzOTlERUJERDQxQUFDMkI5REVFRTNGNkI1RDk3RUZGRjU0QzZFMjc4ODIwQ0RFNjNDQTlCRTk5RTVGOUY4Qjc1MEU0MEVCRDdFOTVGRkU0RTk2MzJENTFBRDNEMjdGMjM2ODZBMEU0NzU1REEzRUIyNjA3Mzk4NTM2MzU0RkIzMzZCMTc0RDRDRDJDRjVFMjFFOTYxOTNGM0EyMTZBREQ4QzcyNTAzOTBGRDlEQzcwNDk2QkU0QTc5QzFEOTQ0ODBGOEMyQzNCMDE4NzE3MjExQUM5OUNDMDBDODkwNzdEREYxMjBBMzAxREJBMkY2OEE5NkM1QUQzRUMwQjI0OTdDQkFFNTFCODNFREZGNTg3NEVCMEI3NjBGMDk2MDc5MDI3RjBCQTMwM0EyQUFFNEE5RTRFRjk4QjJFMTUyOTRDRjE1QjFBMDlFMjNEMDA4MDhDNzI0QTcyNDA4Rjc0REM3NjYwNzFDNzIyREY0ODE4MEIwMUQxRTA3NDdENDYxMTA5MDZGMTM3N0QwNDRDNDMzN0Q1MEQ0NTE4M0RFMzRBQjQ1Qzg2NzgyNzJDQzMxRjY0QjE3OUU2NjE0QzgyNjZDRTQwMTFBQjRFQUQ1REQ1RTlDMDlDNEJBRTJBQjE0Mzc="
      />

      <div class="umbraco-forms-page" id="1c91c96e-7ab7-4325-b82a-26750e0e0ab9">
        <fieldset
          class="umbraco-forms-fieldset"
          id="4114b1cb-7a38-404e-9a14-4a70881f1695"
        >
          <legend>Früchteabo</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div class=" umbraco-forms-field abo titleanddescription">
                <div class="umbraco-forms-field-wrapper">
                  <div
                    id="fbc41bf4-e013-420a-a8da-ce8f21c7222e"
                    data-umb="fbc41bf4-e013-420a-a8da-ce8f21c7222e"
                    class=""
                  >
                    <h2>Stellen Sie sich Ihr Wunsch-Abo zusammen:</h2>
                  </div>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="fbc41bf4-e013-420a-a8da-ce8f21c7222e"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field grössefrüchtekorb singlechoice mandatory alternating"
              >
                <label
                  for="674c365d-0c01-4857-d832-1a3f4e470bdb"
                  class="umbraco-forms-label"
                >
                  Grösse Früchtekorb
                  <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <div
                    class="  radiobuttonlist"
                    id="674c365d-0c01-4857-d832-1a3f4e470bdb"
                    data-umb="674c365d-0c01-4857-d832-1a3f4e470bdb"
                  >
                    <input
                      type="radio"
                      name="674c365d-0c01-4857-d832-1a3f4e470bdb"
                      id="674c365d-0c01-4857-d832-1a3f4e470bdb_0"
                      data-umb="674c365d-0c01-4857-d832-1a3f4e470bdb_0"
                      value="Klein 6.50"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="674c365d-0c01-4857-d832-1a3f4e470bdb_0"
                      >Klein 6.50</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="674c365d-0c01-4857-d832-1a3f4e470bdb"
                      id="674c365d-0c01-4857-d832-1a3f4e470bdb_1"
                      data-umb="674c365d-0c01-4857-d832-1a3f4e470bdb_1"
                      value="Mittel 12.50"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="674c365d-0c01-4857-d832-1a3f4e470bdb_1"
                      >Mittel 12.50</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="674c365d-0c01-4857-d832-1a3f4e470bdb"
                      id="674c365d-0c01-4857-d832-1a3f4e470bdb_2"
                      data-umb="674c365d-0c01-4857-d832-1a3f4e470bdb_2"
                      value="Gross 18.50"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="674c365d-0c01-4857-d832-1a3f4e470bdb_2"
                      >Gross 18.50</label
                    >
                    <br />
                  </div>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="674c365d-0c01-4857-d832-1a3f4e470bdb"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          class="umbraco-forms-fieldset"
          id="3fe5e352-183c-40c4-d7c7-4633acd54432"
        >
          <legend>Lieferung</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div class=" umbraco-forms-field anzahl singlechoice mandatory">
                <label
                  for="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                  class="umbraco-forms-label"
                >
                  Anzahl <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <div
                    class="  radiobuttonlist"
                    id="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                    data-umb="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                  >
                    <input
                      type="radio"
                      name="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                      id="a8147cbb-d8fd-4ed3-869a-416e3d68d549_0"
                      data-umb="a8147cbb-d8fd-4ed3-869a-416e3d68d549_0"
                      value="1 X PRO MONAT (LIEFERUNG IN DER ERSTEN WOCHE)"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="a8147cbb-d8fd-4ed3-869a-416e3d68d549_0"
                      >1 X PRO MONAT (LIEFERUNG IN DER ERSTEN WOCHE)</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                      id="a8147cbb-d8fd-4ed3-869a-416e3d68d549_1"
                      data-umb="a8147cbb-d8fd-4ed3-869a-416e3d68d549_1"
                      value="1 X PRO WOCHE"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="a8147cbb-d8fd-4ed3-869a-416e3d68d549_1"
                      >1 X PRO WOCHE</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                      id="a8147cbb-d8fd-4ed3-869a-416e3d68d549_2"
                      data-umb="a8147cbb-d8fd-4ed3-869a-416e3d68d549_2"
                      value="2 X PRO WOCHE"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="a8147cbb-d8fd-4ed3-869a-416e3d68d549_2"
                      >2 X PRO WOCHE</label
                    >
                    <br />
                    <input
                      type="radio"
                      name="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                      id="a8147cbb-d8fd-4ed3-869a-416e3d68d549_3"
                      data-umb="a8147cbb-d8fd-4ed3-869a-416e3d68d549_3"
                      value="3 X PRO WOCHE"
                      data-val="true"
                      data-val-required="Bitte wählen Sie aus."
                      data-rule-required="true"
                      data-msg-required="Bitte wählen Sie aus."
                    />
                    <label for="a8147cbb-d8fd-4ed3-869a-416e3d68d549_3"
                      >3 X PRO WOCHE</label
                    >
                    <br />
                  </div>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="a8147cbb-d8fd-4ed3-869a-416e3d68d549"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          class="umbraco-forms-fieldset"
          id="a69d62e8-9fd1-4b0c-ee10-4fd32e4d2d31"
        >
          <legend>Liefertage und Menge</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-6">
              <div class=" umbraco-forms-field montag shortanswer alternating">
                <label
                  for="d0fe4720-b015-4446-d730-ae7e9f0c15ff"
                  class="umbraco-forms-label"
                >
                  Montag
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="d0fe4720-b015-4446-d730-ae7e9f0c15ff"
                    id="d0fe4720-b015-4446-d730-ae7e9f0c15ff"
                    data-umb="d0fe4720-b015-4446-d730-ae7e9f0c15ff"
                    class="text "
                    value=""
                    maxlength="255"
                    placeholder="Anzahl"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="d0fe4720-b015-4446-d730-ae7e9f0c15ff"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field mittwoch shortanswer">
                <label
                  for="f5888745-33c1-4a8a-8ff3-6aba3a4e3dc5"
                  class="umbraco-forms-label"
                >
                  Mittwoch
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="f5888745-33c1-4a8a-8ff3-6aba3a4e3dc5"
                    id="f5888745-33c1-4a8a-8ff3-6aba3a4e3dc5"
                    data-umb="f5888745-33c1-4a8a-8ff3-6aba3a4e3dc5"
                    class="text "
                    value=""
                    maxlength="255"
                    placeholder="Anzahl"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="f5888745-33c1-4a8a-8ff3-6aba3a4e3dc5"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field freitag shortanswer alternating">
                <label
                  for="6c2a5f11-9fdd-4ddb-eef8-63bebf4d6e90"
                  class="umbraco-forms-label"
                >
                  Freitag
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="6c2a5f11-9fdd-4ddb-eef8-63bebf4d6e90"
                    id="6c2a5f11-9fdd-4ddb-eef8-63bebf4d6e90"
                    data-umb="6c2a5f11-9fdd-4ddb-eef8-63bebf4d6e90"
                    class="text "
                    value=""
                    maxlength="255"
                    placeholder="Anzahl"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="6c2a5f11-9fdd-4ddb-eef8-63bebf4d6e90"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
            <div class="umbraco-forms-container col-md-6">
              <div class=" umbraco-forms-field dienstag shortanswer">
                <label
                  for="0a36d95f-a895-4b32-bcaf-5c488cc8d7cf"
                  class="umbraco-forms-label"
                >
                  Dienstag
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="0a36d95f-a895-4b32-bcaf-5c488cc8d7cf"
                    id="0a36d95f-a895-4b32-bcaf-5c488cc8d7cf"
                    data-umb="0a36d95f-a895-4b32-bcaf-5c488cc8d7cf"
                    class="text "
                    value=""
                    maxlength="255"
                    placeholder="Anzahl"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="0a36d95f-a895-4b32-bcaf-5c488cc8d7cf"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field donnerstag shortanswer alternating"
              >
                <label
                  for="a13c879d-29da-4690-d2a6-0ed5206a504f"
                  class="umbraco-forms-label"
                >
                  Donnerstag
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="a13c879d-29da-4690-d2a6-0ed5206a504f"
                    id="a13c879d-29da-4690-d2a6-0ed5206a504f"
                    data-umb="a13c879d-29da-4690-d2a6-0ed5206a504f"
                    class="text "
                    value=""
                    maxlength="255"
                    placeholder="Anzahl"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="a13c879d-29da-4690-d2a6-0ed5206a504f"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          class="umbraco-forms-fieldset"
          id="06fa5cbe-c0ae-49d3-8c2e-2e5269da40ff"
        >
          <legend>Lieferadresse</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div class=" umbraco-forms-field vorname shortanswer mandatory">
                <label
                  for="f8f5d314-2c70-4e4d-b0aa-facbe9c4fd8e"
                  class="umbraco-forms-label"
                >
                  Vorname <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="f8f5d314-2c70-4e4d-b0aa-facbe9c4fd8e"
                  id="f8f5d314-2c70-4e4d-b0aa-facbe9c4fd8e"
                  data-umb="f8f5d314-2c70-4e4d-b0aa-facbe9c4fd8e" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Vorname" aus."
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="f8f5d314-2c70-4e4d-b0aa-facbe9c4fd8e"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field name shortanswer mandatory alternating"
              >
                <label
                  for="5f087a33-340b-4c22-b44d-f5bab60714ff"
                  class="umbraco-forms-label"
                >
                  Name <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="5f087a33-340b-4c22-b44d-f5bab60714ff"
                  id="5f087a33-340b-4c22-b44d-f5bab60714ff"
                  data-umb="5f087a33-340b-4c22-b44d-f5bab60714ff" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Name" aus." />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="5f087a33-340b-4c22-b44d-f5bab60714ff"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field büronrgebäude shortanswer">
                <label
                  for="61386fca-3f88-4ee3-b088-e264485c9aa6"
                  class="umbraco-forms-label"
                >
                  Büro-Nr. / Gebäude
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="61386fca-3f88-4ee3-b088-e264485c9aa6"
                    id="61386fca-3f88-4ee3-b088-e264485c9aa6"
                    data-umb="61386fca-3f88-4ee3-b088-e264485c9aa6"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="61386fca-3f88-4ee3-b088-e264485c9aa6"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field email shortanswer mandatory alternating"
              >
                <label
                  for="2c9b2d53-5b6d-47cc-8d3d-cb2a14d89bfc"
                  class="umbraco-forms-label"
                >
                  E-Mail <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="email"
                  name="2c9b2d53-5b6d-47cc-8d3d-cb2a14d89bfc"
                  id="2c9b2d53-5b6d-47cc-8d3d-cb2a14d89bfc"
                  data-umb="2c9b2d53-5b6d-47cc-8d3d-cb2a14d89bfc" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "E-Mail" aus."
                  data-val-regex="Bitte geben Sie eine gültige "E-Mail" ein."
                  data-val-regex-pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="2c9b2d53-5b6d-47cc-8d3d-cb2a14d89bfc"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field telefon shortanswer">
                <label
                  for="512dd753-ef53-4f00-8991-c160207e4c6b"
                  class="umbraco-forms-label"
                >
                  Telefon
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="tel"
                    name="512dd753-ef53-4f00-8991-c160207e4c6b"
                    id="512dd753-ef53-4f00-8991-c160207e4c6b"
                    data-umb="512dd753-ef53-4f00-8991-c160207e4c6b"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="512dd753-ef53-4f00-8991-c160207e4c6b"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          class="umbraco-forms-fieldset"
          id="065fb4bb-3ef8-4f88-edff-9bff5b246c4f"
        >
          <legend>Rechnungsadresse</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div
                class=" umbraco-forms-field firma shortanswer mandatory alternating"
              >
                <label
                  for="5f236cbc-dcb9-4d60-b6a4-47c87e2e1518"
                  class="umbraco-forms-label"
                >
                  Firma <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="5f236cbc-dcb9-4d60-b6a4-47c87e2e1518"
                  id="5f236cbc-dcb9-4d60-b6a4-47c87e2e1518"
                  data-umb="5f236cbc-dcb9-4d60-b6a4-47c87e2e1518" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Firma" aus." />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="5f236cbc-dcb9-4d60-b6a4-47c87e2e1518"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field abteilung shortanswer">
                <label
                  for="4709d4b9-0933-401b-fb83-0a50418f334f"
                  class="umbraco-forms-label"
                >
                  Abteilung
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="4709d4b9-0933-401b-fb83-0a50418f334f"
                    id="4709d4b9-0933-401b-fb83-0a50418f334f"
                    data-umb="4709d4b9-0933-401b-fb83-0a50418f334f"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="4709d4b9-0933-401b-fb83-0a50418f334f"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field sapnr shortanswer alternating">
                <label
                  for="42a01b52-5a50-416f-defd-9eebc5c3d6ac"
                  class="umbraco-forms-label"
                >
                  SAP-Nr.
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="42a01b52-5a50-416f-defd-9eebc5c3d6ac"
                    id="42a01b52-5a50-416f-defd-9eebc5c3d6ac"
                    data-umb="42a01b52-5a50-416f-defd-9eebc5c3d6ac"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="42a01b52-5a50-416f-defd-9eebc5c3d6ac"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field kostenstellenleiterin shortanswer"
              >
                <label
                  for="43fc2817-1b0c-4a05-c5b0-74aac074352c"
                  class="umbraco-forms-label"
                >
                  Kostenstellenleiterin
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="43fc2817-1b0c-4a05-c5b0-74aac074352c"
                    id="43fc2817-1b0c-4a05-c5b0-74aac074352c"
                    data-umb="43fc2817-1b0c-4a05-c5b0-74aac074352c"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="43fc2817-1b0c-4a05-c5b0-74aac074352c"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field adresse shortanswer mandatory alternating"
              >
                <label
                  for="463e7a49-6215-405b-926c-6eeceefd0554"
                  class="umbraco-forms-label"
                >
                  Adresse <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="463e7a49-6215-405b-926c-6eeceefd0554"
                  id="463e7a49-6215-405b-926c-6eeceefd0554"
                  data-umb="463e7a49-6215-405b-926c-6eeceefd0554" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Adresse" aus."
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="463e7a49-6215-405b-926c-6eeceefd0554"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field plz shortanswer mandatory">
                <label
                  for="ec004d0d-11d4-4347-f8b7-b05ca85980c9"
                  class="umbraco-forms-label"
                >
                  PLZ <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="number"
                    name="ec004d0d-11d4-4347-f8b7-b05ca85980c9"
                    id="ec004d0d-11d4-4347-f8b7-b05ca85980c9"
                    data-umb="ec004d0d-11d4-4347-f8b7-b05ca85980c9"
                    class="text "
                    value=""
                    maxlength="4"
                    data-val="true"
                    data-val-required="Die erforderliche PLZ besteht aus 4 Ziffern."
                    data-val-regex="Please provide a valid value for PLZ"
                    data-val-regex-pattern="^[0-9]{4}$"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="ec004d0d-11d4-4347-f8b7-b05ca85980c9"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div
                class=" umbraco-forms-field ort shortanswer mandatory alternating"
              >
                <label
                  for="12fca8d9-79a7-4c0c-c930-682079d130a4"
                  class="umbraco-forms-label"
                >
                  Ort <span class="umbraco-forms-indicator">*</span>
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input type="text" name="12fca8d9-79a7-4c0c-c930-682079d130a4"
                  id="12fca8d9-79a7-4c0c-c930-682079d130a4"
                  data-umb="12fca8d9-79a7-4c0c-c930-682079d130a4" class="text "
                  value="" maxlength="255" data-val="true"
                  data-val-required="Bitte füllen Sie das Feld "Ort" aus." />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="12fca8d9-79a7-4c0c-c930-682079d130a4"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class=" umbraco-forms-field büronrgebäude shortanswer">
                <label
                  for="f09fa23c-ea0a-4d77-bc67-48d0ea389475"
                  class="umbraco-forms-label"
                >
                  Büro-Nr. / Gebäude
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <input
                    type="text"
                    name="f09fa23c-ea0a-4d77-bc67-48d0ea389475"
                    id="f09fa23c-ea0a-4d77-bc67-48d0ea389475"
                    data-umb="f09fa23c-ea0a-4d77-bc67-48d0ea389475"
                    class="text "
                    value=""
                    maxlength="255"
                  />

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="f09fa23c-ea0a-4d77-bc67-48d0ea389475"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          class="umbraco-forms-fieldset"
          id="0802989a-4dc1-4325-abe1-774d9663affb"
        >
          <legend>Nachricht</legend>

          <div class="row-fluid">
            <div class="umbraco-forms-container col-md-12">
              <div
                class=" umbraco-forms-field nachricht longanswer alternating"
              >
                <label
                  for="66b845f3-4f3c-42cc-c9c9-9e09a01cc1dd"
                  class="umbraco-forms-label"
                >
                  Nachricht
                </label>

                <div class="umbraco-forms-field-wrapper">
                  <textarea
                    class=""
                    name="66b845f3-4f3c-42cc-c9c9-9e09a01cc1dd"
                    id="66b845f3-4f3c-42cc-c9c9-9e09a01cc1dd"
                    data-umb="66b845f3-4f3c-42cc-c9c9-9e09a01cc1dd"
                    rows="4"
                    cols="20"
                    maxlength="500"
                  ></textarea>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="66b845f3-4f3c-42cc-c9c9-9e09a01cc1dd"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <div style="display: none" aria-hidden="true">
          <input type="text" name="0074f0521507473781e0859a04de693d" />
        </div>

        <div class="umbraco-forms-navigation row-fluid">
          <!-- todo: add policy from m4music? made both as dictionary... -->
          <p>
            Die Bearbeitung Ihrer Personendaten erfolgt gemäss unserer
            <a
              rel="noopener"
              href="https://www.migros.ch/de/datenschutz.html"
              target="_blank"
              >Datenschutzerklärung</a
            >. Dieses Formular ist durch reCAPTCHA geschützt, die
            <a
              rel="noopener"
              href="https://policies.google.com/privacy"
              target="_blank"
              >Google Privacy Policy</a
            >
            und
            <a
              rel="noopener"
              href="https://policies.google.com/terms"
              target="_blank"
              >Terms of Service</a
            >
            finden Anwendung.
          </p>
          <div class="col-md-12">
            <input
              type="submit"
              class="btn primary"
              value="Früchteabo bestellen"
              name="__next"
              data-umb="submit-forms-form"
            />
          </div>
        </div>
      </div>

      <input
        name="ufprt"
        type="hidden"
        value="34102ADEB361B788B51360B582F5344E46F57E5952BC57EE95ECACD4594C77155D37778CECBD223621E4B82A95DC8C77AD6B9A9979C988CD8590D233A468B613BFD7888790322F04BC7431EA84E35127F72703BCB4D1DC3084FF245E3D5CCD590944BC95C92E8FBBE3CB060C51B4B016A9FDDA0B74A3967477C74DEB90BF9716E0F68A0722F3BBA7C52ED24C7C0C5657"
      />

      <div
        class="umbraco-forms-form-config"
        style="display: none"
        data-id="0074f0521507473781e0859a04de693d"
        data-serialized-page-button-conditions="{}"
        data-serialized-fieldset-conditions="{}"
        data-serialized-field-conditions="{}"
        data-serialized-fields-not-displayed="{}"
      ></div></div
  ></m-form>
`
