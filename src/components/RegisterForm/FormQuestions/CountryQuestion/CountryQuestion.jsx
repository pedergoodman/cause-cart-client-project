// * - IMPORTING -
// React
import React from "react";
// MUI
import { InputLabel, Select, MenuItem } from "@mui/material";

// * - CountryQuestion Component -
function CountryQuestion({ country, setCountry }) {
  // * - RENDERING -
  return (
    <div style={{ width: "50%", boxSizing: "border-box" }}>
      <InputLabel label="Set Country" id="country-label">
        Country
      </InputLabel>
      <Select
        className="register-form-input-field"
        fullWidth
        placeholder="Select country"
        labelId="country-label"
        id="country-input"
        value={country}
        label="Country input"
        defaultValue={"United States"}
        onChange={(event) => setCountry(event.target.value)}
      >
        {/* Country Options */}
        <MenuItem value={"Afghanistan"}>Afghanistan</MenuItem>
        <MenuItem value={"Albania"}>Albania</MenuItem>
        <MenuItem value={"Algeria"}>Algeria</MenuItem>
        <MenuItem value={"Andorra"}>Andorra</MenuItem>
        <MenuItem value={"Angola"}>Angola</MenuItem>
        <MenuItem value={"Antigua and Barbuda"}>Antigua and Barbuda</MenuItem>
        <MenuItem value={"Argentina"}>Argentina</MenuItem>
        <MenuItem value={"Armenia"}>Armenia</MenuItem>
        <MenuItem value={"Australia"}>Australia</MenuItem>
        <MenuItem value={"Austria"}>Austria</MenuItem>
        <MenuItem value={"Azerbaijan"}>Azerbaijan</MenuItem>
        <MenuItem value={"Bahamas"}>Bahamas</MenuItem>
        <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
        <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
        <MenuItem value={"Barbados"}>Barbados</MenuItem>
        <MenuItem value={"Belarus"}>Belarus</MenuItem>
        <MenuItem value={"Belgium"}>Belgium</MenuItem>
        <MenuItem value={"Belize"}>Belize</MenuItem>
        <MenuItem value={"Benin"}>Benin</MenuItem>
        <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
        <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
        <MenuItem value={"Bosnia and Herzegovina"}>
          Bosnia and Herzegovina
        </MenuItem>
        <MenuItem value={"Botswana"}>Botswana</MenuItem>
        <MenuItem value={"Brazil"}>Brazil</MenuItem>
        <MenuItem value={"Brunei"}>Brunei</MenuItem>
        <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
        <MenuItem value={"Burkina Faso"}>Burkina Faso</MenuItem>
        <MenuItem value={"Burundi"}>Burundi</MenuItem>
        <MenuItem value={"Cambodia"}>Cambodia</MenuItem>
        <MenuItem value={"Cameroon"}>Cameroon</MenuItem>
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"Cape Verde"}>Cape Verde</MenuItem>
        <MenuItem value={"Central African Republic"}>
          Central African Republic
        </MenuItem>
        <MenuItem value={"Chad"}>Chad</MenuItem>
        <MenuItem value={"Chile"}>Chile</MenuItem>
        <MenuItem value={"China"}>China</MenuItem>
        <MenuItem value={"Colombia"}>Colombia</MenuItem>
        <MenuItem value={"Comoros"}>Comoros</MenuItem>
        <MenuItem value={"Congo (Brazzaville)"}>Congo (Brazzaville)</MenuItem>
        <MenuItem value={"Congo (Kinshasa)"}>Congo (Kinshasa)</MenuItem>
        <MenuItem value={"Costa Rica"}>Costa Rica</MenuItem>
        <MenuItem value={"Croatia"}>Croatia</MenuItem>
        <MenuItem value={"Cuba"}>Cuba</MenuItem>
        <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
        <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
        <MenuItem value={"Denmark"}>Denmark</MenuItem>
        <MenuItem value={"Djibouti"}>Djibouti</MenuItem>
        <MenuItem value={"Dominica"}>Dominica</MenuItem>
        <MenuItem value={"Dominican Republic"}>Dominican Republic</MenuItem>
        <MenuItem value={"East Timor (Timor-Leste)"}>
          East Timor (Timor-Leste)
        </MenuItem>
        <MenuItem value={"Ecuador"}>Ecuador</MenuItem>
        <MenuItem value={"Egypt"}>Egypt</MenuItem>
        <MenuItem value={"El Salvador"}>El Salvador</MenuItem>
        <MenuItem value={"Equatorial Guinea"}>Equatorial Guinea</MenuItem>
        <MenuItem value={"Eritrea"}>Eritrea</MenuItem>
        <MenuItem value={"Estonia"}>Estonia</MenuItem>
        <MenuItem value={"Eswatini"}>Eswatini</MenuItem>
        <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
        <MenuItem value={"Fiji"}>Fiji</MenuItem>
        <MenuItem value={"Finland"}>Finland</MenuItem>
        <MenuItem value={"France"}>France</MenuItem>
        <MenuItem value={"Gabon"}>Gabon</MenuItem>
        <MenuItem value={"Gambia"}>Gambia</MenuItem>
        <MenuItem value={"Georgia"}>Georgia</MenuItem>
        <MenuItem value={"Germany"}>Germany</MenuItem>
        <MenuItem value={"Ghana"}>Ghana</MenuItem>
        <MenuItem value={"Greece"}>Greece</MenuItem>
        <MenuItem value={"Grenada"}>Grenada</MenuItem>
        <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
        <MenuItem value={"Guinea"}>Guinea</MenuItem>
        <MenuItem value={"Guinea-Bissau"}>Guinea-Bissau</MenuItem>
        <MenuItem value={"Guyana"}>Guyana</MenuItem>
        <MenuItem value={"Haiti"}>Haiti</MenuItem>
        <MenuItem value={"Honduras"}>Honduras</MenuItem>
        <MenuItem value={"Hungary"}>Hungary</MenuItem>
        <MenuItem value={"Iceland"}>Iceland</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
        <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
        <MenuItem value={"Iran"}>Iran</MenuItem>
        <MenuItem value={"Iraq"}>Iraq</MenuItem>
        <MenuItem value={"Ireland"}>Ireland</MenuItem>
        <MenuItem value={"Israel"}>Israel</MenuItem>
        <MenuItem value={"Italy"}>Italy</MenuItem>
        <MenuItem value={"Ivory Coast"}>Ivory Coast</MenuItem>
        <MenuItem value={"Jamaica"}>Jamaica</MenuItem>
        <MenuItem value={"Japan"}>Japan</MenuItem>
        <MenuItem value={"Jordan"}>Jordan</MenuItem>
        <MenuItem value={"Kazakhstan"}>Kazakhstan</MenuItem>
        <MenuItem value={"Kenya"}>Kenya</MenuItem>
        <MenuItem value={"Kiribati"}>Kiribati</MenuItem>
        <MenuItem value={"Korea, North"}>Korea, North</MenuItem>
        <MenuItem value={"Korea, South"}>Korea, South</MenuItem>
        <MenuItem value={"Kosovo"}>Kosovo</MenuItem>
        <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
        <MenuItem value={"Kyrgyzstan"}>Kyrgyzstan</MenuItem>
        <MenuItem value={"Laos"}>Laos</MenuItem>
        <MenuItem value={"Latvia"}>Latvia</MenuItem>
        <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
        <MenuItem value={"Lesotho"}>Lesotho</MenuItem>
        <MenuItem value={"Liberia"}>Liberia</MenuItem>
        <MenuItem value={"Libya"}>Libya</MenuItem>
        <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
        <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
        <MenuItem value={"Luxembourg"}>Luxembourg</MenuItem>
        <MenuItem value={"Madagascar"}>Madagascar</MenuItem>
        <MenuItem value={"Malawi"}>Malawi</MenuItem>
        <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
        <MenuItem value={"Maldives"}>Maldives</MenuItem>
        <MenuItem value={"Mali"}>Mali</MenuItem>
        <MenuItem value={"Malta"}>Malta</MenuItem>
        <MenuItem value={"Marshall Islands"}>Marshall Islands</MenuItem>
        <MenuItem value={"Mauritania"}>Mauritania</MenuItem>
        <MenuItem value={"Mauritius"}>Mauritius</MenuItem>
        <MenuItem value={"Mexico"}>Mexico</MenuItem>
        <MenuItem value={"Micronesia"}>Micronesia</MenuItem>
        <MenuItem value={"Moldova"}>Moldova</MenuItem>
        <MenuItem value={"Monaco"}>Monaco</MenuItem>
        <MenuItem value={"Mongolia"}>Mongolia</MenuItem>
        <MenuItem value={"Montenegro"}>Montenegro</MenuItem>
        <MenuItem value={"Morocco"}>Morocco</MenuItem>
        <MenuItem value={"Mozambique"}>Mozambique</MenuItem>
        <MenuItem value={"Myanmar"}>Myanmar</MenuItem>
        <MenuItem value={"Namibia"}>Namibia</MenuItem>
        <MenuItem value={"Nauru"}>Nauru</MenuItem>
        <MenuItem value={"Nepal"}>Nepal</MenuItem>
        <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
        <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
        <MenuItem value={"Nicaragua"}>Nicaragua</MenuItem>
        <MenuItem value={"Niger"}>Niger</MenuItem>
        <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
        <MenuItem value={"North Macedonia"}>North Macedonia</MenuItem>
        <MenuItem value={"Norway"}>Norway</MenuItem>
        <MenuItem value={"Oman"}>Oman</MenuItem>
        <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
        <MenuItem value={"Palau"}>Palau</MenuItem>
        <MenuItem value={"Palestine"}>Palestine</MenuItem>
        <MenuItem value={"Panama"}>Panama</MenuItem>
        <MenuItem value={"Papua New Guinea"}>Papua New Guinea</MenuItem>
        <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
        <MenuItem value={"Peru"}>Peru</MenuItem>
        <MenuItem value={"Philippines"}>Philippines</MenuItem>
        <MenuItem value={"Poland"}>Poland</MenuItem>
        <MenuItem value={"Portugal"}>Portugal</MenuItem>
        <MenuItem value={"Qatar"}>Qatar</MenuItem>
        <MenuItem value={"Romania"}>Romania</MenuItem>
        <MenuItem value={"Russia"}>Russia</MenuItem>
        <MenuItem value={"Rwanda"}>Rwanda</MenuItem>
        <MenuItem value={"Saint Kitts and Nevis"}>
          Saint Kitts and Nevis
        </MenuItem>
        <MenuItem value={"Saint Lucia"}>Saint Lucia</MenuItem>
        <MenuItem value={"Saint Vincent and the Grenadines"}>
          Saint Vincent and the Grenadines
        </MenuItem>
        <MenuItem value={"Samoa"}>Samoa</MenuItem>
        <MenuItem value={"San Marino"}>San Marino</MenuItem>
        <MenuItem value={"Sao Tome and Principe"}>
          Sao Tome and Principe
        </MenuItem>
        <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
        <MenuItem value={"Senegal"}>Senegal</MenuItem>
        <MenuItem value={"Serbia"}>Serbia</MenuItem>
        <MenuItem value={"Seychelles"}>Seychelles</MenuItem>
        <MenuItem value={"Sierra Leone"}>Sierra Leone</MenuItem>
        <MenuItem value={"Singapore"}>Singapore</MenuItem>
        <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
        <MenuItem value={"Slovenia"}>Slovenia</MenuItem>
        <MenuItem value={"Solomon Islands"}>Solomon Islands</MenuItem>
        <MenuItem value={"Somalia"}>Somalia</MenuItem>
        <MenuItem value={"South Africa"}>South Africa</MenuItem>
        <MenuItem value={"South Sudan"}>South Sudan</MenuItem>
        <MenuItem value={"Spain"}>Spain</MenuItem>
        <MenuItem value={"Sri Lanka"}>Sri Lanka</MenuItem>
        <MenuItem value={"Sudan"}>Sudan</MenuItem>
        <MenuItem value={"Suriname"}>Suriname</MenuItem>
        <MenuItem value={"Sweden"}>Sweden</MenuItem>
        <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
        <MenuItem value={"Syria"}>Syria</MenuItem>
        <MenuItem value={"Taiwan"}>Taiwan</MenuItem>
        <MenuItem value={"Tajikistan"}>Tajikistan</MenuItem>
        <MenuItem value={"Tanzania"}>Tanzania</MenuItem>
        <MenuItem value={"Thailand"}>Thailand</MenuItem>
        <MenuItem value={"Timor-Leste"}>Timor-Leste</MenuItem>
        <MenuItem value={"Togo"}>Togo</MenuItem>
        <MenuItem value={"Tonga"}>Tonga</MenuItem>
        <MenuItem value={"Trinidad and Tobago"}>Trinidad and Tobago</MenuItem>
        <MenuItem value={"Tunisia"}>Tunisia</MenuItem>
        <MenuItem value={"Turkey"}>Turkey</MenuItem>
        <MenuItem value={"Turkmenistan"}>Turkmenistan</MenuItem>
        <MenuItem value={"Tuvalu"}>Tuvalu</MenuItem>
        <MenuItem value={"Uganda"}>Uganda</MenuItem>
        <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
        <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
        <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
        <MenuItem value={"United States"}>United States</MenuItem>
        <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
        <MenuItem value={"Uzbekistan"}>Uzbekistan</MenuItem>
        <MenuItem value={"Vanuatu"}>Vanuatu</MenuItem>
        <MenuItem value={"Vatican City"}>Vatican City</MenuItem>
        <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
        <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
        <MenuItem value={"Yemen"}>Yemen</MenuItem>
        <MenuItem value={"Zambia"}>Zambia</MenuItem>
        <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
      </Select>
    </div>
  );
} // * - END CountryQuestion Component -

// * Exporting CountryQuestion Component
export default CountryQuestion;
