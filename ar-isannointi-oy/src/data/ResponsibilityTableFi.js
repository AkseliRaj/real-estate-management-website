/**
 * Finnish responsibility tables (housing company vs shareholder per row).
 * Keep `id` and row order aligned with ResponsibilityTableEn.js.
 */
const responsibilityTablesFi = {
    tables: [
        {
            id: 'structures',
            title: null,
            headers: {
                firstColumn: 'Rakenteet',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'Vesikatto', housingAssociation: true, shareholder: false },
                { name: 'Ylä-, väli- ja alapohja', housingAssociation: true, shareholder: false },
                { name: 'Ulkoseinä, sisäseinät, pilarit ja palkit', housingAssociation: true, shareholder: false },
                { name: 'Painumat ja halkeamat rakenteissa', housingAssociation: true, shareholder: false },
                { name: 'Parvekkeet', housingAssociation: true, shareholder: true },
                { name: 'Lämmön-, veden- ja ääneneristeet', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'coatings',
            title: null,
            headers: {
                firstColumn: 'Pinnoitteet',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'Sisäpuoliset maalaukset, tapetointi ym. lattia- ja seinäpinnoitteet', housingAssociation: false, shareholder: true },
                { name: 'Sisärappaukset, tasoitepinnat ja alaslasketut katot', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'doors',
            title: null,
            headers: {
                firstColumn: 'OVET',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'huoneiston ulko-ovi (kerrostalo-ovi)', housingAssociation: true, shareholder: false },
                { name: 'huoneiston ulkopuolinen lisäovi (palo-ovi)', housingAssociation: true, shareholder: false },
                { name: 'parvekeovi ja terassiovi', housingAssociation: true, shareholder: false },
                { name: 'huoneistojen väliovet ja niiden karmit', housingAssociation: false, shareholder: true },
                { name: 'lukitus: huoneiston ulko-ovi, parveke- ja terassiovi (perusjärjestelmä)', housingAssociation: true, shareholder: false },
                { name: 'lisälukot ja varmuusketjut', housingAssociation: false, shareholder: true },
                { name: 'ovenpysäytin ja aukipitolenkki (sisäp.)', housingAssociation: false, shareholder: true },
                { name: 'ovenpysäytin ja aukipitolenkki (ulkop.)', housingAssociation: true, shareholder: false },
                { name: 'ovikello (mekaaninen)', housingAssociation: true, shareholder: false },
                { name: 'ovisilmä (osakkaan tai asukkaan asentama)', housingAssociation: false, shareholder: true },
                { name: 'automaattiulko-ovi huoneiston sisäp.', housingAssociation: false, shareholder: true },
                { name: 'automaattiulko-ovi huoneiston ulkop.', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'windows',
            title: null,
            headers: {
                firstColumn: 'IKKUNAT',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'ulkopuite ja karmi', housingAssociation: true, shareholder: false },
                { name: 'sisäpuite ja välipuite', housingAssociation: false, shareholder: true },
                { name: 'ikkunoiden ulkopuolen kunnossapito ja maalaus', housingAssociation: true, shareholder: false },
                { name: 'ikkunoiden sisäpuolen kunnossapito sekä maalaus ja lakkaus', housingAssociation: false, shareholder: true },
                { name: 'lasitukset', housingAssociation: true, shareholder: false },
                { name: 'tiivistykset (vakiotiivisteet)', housingAssociation: true, shareholder: false },
                { name: 'helat (saranat, lukot, aukipitolaitteet)', housingAssociation: true, shareholder: true },
                { name: 'puitteiden väliin tai sisäpuolelle asennetut sälekaihtimet', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'hvac_fixtures',
            title: null,
            headers: {
                firstColumn: 'LVI-KALUSTEET JA LAITTEET',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'ammeet ja altaat (käsienpesuallas, kylpyamme, poreamme, suihkuallas, astianpesuallas ja -pöytä)', housingAssociation: false, shareholder: true },
                { name: 'ammeen ja altaan vesilukko ja lattiaputki', housingAssociation: true, shareholder: false },
                { name: 'vesihanat ja sekoittimet (pl. osakkaan asentamat erikoisuudet)', housingAssociation: true, shareholder: true },
                { name: 'kalustesauna, höyrykaappi ja höyrysauna', housingAssociation: false, shareholder: true },
                { name: 'letkut ja liitäntäputket sekä käsisuihkut ml. astian- ja pyykinpesukoneen täyttö- ja poistoletkut liitäntäosineen sekä bideesuihkut', housingAssociation: false, shareholder: true },
                { name: 'venttiilit (patteri-, sulku- ja varoventtiilit)', housingAssociation: true, shareholder: false },
                { name: 'wc-istuin, allas, säiliö ja huuhteluventtiililaitteisto (pl. osakkaan asentamat erikoisuudet)', housingAssociation: true, shareholder: true },
                { name: 'lämminvesivaraaja (yhtiön asentama)', housingAssociation: true, shareholder: false },
                { name: 'astian- ja pyykinpesukone (osakkaan asentama)', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'ventilation',
            title: null,
            headers: {
                firstColumn: 'KONEELLINEN POISTOILMANVAIHTOJÄRJESTELMÄ',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'raitisilmaventtiili, ulko- ja sisäpuoliset osat - korjaus ja uusiminen', housingAssociation: true, shareholder: false },
                { name: 'suodattimet (ulkoilma-, korvausilma- ja raitisilmaventtiili) - puhdistus ja uusiminen (sisäpuolella)', housingAssociation: false, shareholder: true },
                { name: 'suodattimet (ulkoilma-, korvausilma- ja raitisilmaventtiili) - puhdistus ja uusiminen (ulkopuolella)', housingAssociation: true, shareholder: false },
                { name: 'liesikuvun rasvasuodatin (puhdistus ja uusiminen)', housingAssociation: false, shareholder: true },
                { name: 'liesikupu (kytketty poistokanavaan) - laite', housingAssociation: true, shareholder: false },
                { name: 'liesikupu (kytketty poistokanavaan) - valo ja valokytkin', housingAssociation: false, shareholder: true },
                { name: 'liesituuletin suodattimineen (varustettu puhaltimella)', housingAssociation: false, shareholder: true },
                { name: 'ilmanvaihdon automatiikka- ja ohjauslaitteet sekä kytkimet', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'electrical',
            title: null,
            headers: {
                firstColumn: 'SÄHKÖTEKNISET JÄRJESTELMÄT',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'huoneiston sisäiset sähkö- ja tiedonsiirtojohdot kiinteän verkon osalta', housingAssociation: true, shareholder: false },
                { name: 'ryhmäkeskus / jakokeskus (sulaketaulu)', housingAssociation: true, shareholder: false },
                { name: 'kytkin (katkaisija) ja sähköpistorasia', housingAssociation: true, shareholder: false },
                { name: 'sähköpistorasian peitelevy', housingAssociation: false, shareholder: true },
                { name: 'autonlämmityspistorasia varusteineen', housingAssociation: true, shareholder: false },
                { name: 'sulake, loisteputki, lamppu, led, kuituvalo', housingAssociation: false, shareholder: true },
                { name: 'kiinteät valaisimet (pl. osakkaan asentamat)', housingAssociation: true, shareholder: true },
                { name: 'sähkökiuas (osakkaan asentama)', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'antenna_gas_other',
            title: null,
            headers: {
                firstColumn: 'Muut järjestelmät',
                housingAssociation: 'Taloyhtiö',
                shareholder: 'Osakas',
            },
            rows: [
                { name: 'yhteisantennilaitteet', housingAssociation: true, shareholder: false },
                { name: 'antennirasia', housingAssociation: true, shareholder: false },
                { name: 'antennirasian peitelevy', housingAssociation: false, shareholder: true },
                { name: 'kaasuputket', housingAssociation: true, shareholder: false },
                { name: 'postilaatikko', housingAssociation: true, shareholder: false },
                { name: 'palovaroitin (yhtiön asentama perusjärjestelmä)', housingAssociation: true, shareholder: false },
                { name: 'palovaroitin (osakkaan asentama tai paristot)', housingAssociation: false, shareholder: true },
            ],
        },
    ],
};

export default responsibilityTablesFi;