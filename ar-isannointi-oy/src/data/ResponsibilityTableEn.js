/**
 * English responsibility tables (housing company vs shareholder per row).
 * Keep `id` and row order aligned with ResponsibilityTableFi.js.
 */
const responsibilityTablesEn = {
    tables: [
        {
            id: 'structures',
            title: null,
            headers: {
                firstColumn: 'Structures',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Roof', housingAssociation: true, shareholder: false },
                { name: 'Upper floors, intermediate floors and subfloor', housingAssociation: true, shareholder: false },
                { name: 'Exterior walls, interior walls, columns and beams', housingAssociation: true, shareholder: false },
                { name: 'Settlements and cracks in structures', housingAssociation: true, shareholder: false },
                { name: 'Balconies', housingAssociation: true, shareholder: true },
                { name: 'Thermal, water and sound insulation', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'coatings',
            title: null,
            headers: {
                firstColumn: 'Surface finishes',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Interior painting, wallpapering and other floor and wall surface finishes', housingAssociation: false, shareholder: true },
                { name: 'Interior plaster, levelling coats and suspended ceilings', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'doors',
            title: null,
            headers: {
                firstColumn: 'DOORS',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Apartment exterior door (staircase door)', housingAssociation: true, shareholder: false },
                { name: 'Additional exterior door (fire door)', housingAssociation: true, shareholder: false },
                { name: 'Balcony and terrace door', housingAssociation: true, shareholder: false },
                { name: 'Internal doors between apartments and their frames', housingAssociation: false, shareholder: true },
                { name: 'Locking: apartment exterior door, balcony and terrace door (basic system)', housingAssociation: true, shareholder: false },
                { name: 'Additional locks and security chains', housingAssociation: false, shareholder: true },
                { name: 'Door stop and door restrictor (interior side)', housingAssociation: false, shareholder: true },
                { name: 'Door stop and door restrictor (exterior side)', housingAssociation: true, shareholder: false },
                { name: 'Doorbell (mechanical)', housingAssociation: true, shareholder: false },
                { name: 'Peephole (installed by shareholder or resident)', housingAssociation: false, shareholder: true },
                { name: 'Automatic exterior door, apartment interior side', housingAssociation: false, shareholder: true },
                { name: 'Automatic exterior door, apartment exterior side', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'windows',
            title: null,
            headers: {
                firstColumn: 'WINDOWS',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Outer frame and casing', housingAssociation: true, shareholder: false },
                { name: 'Inner frame and mullion', housingAssociation: false, shareholder: true },
                { name: 'Exterior maintenance and painting of windows', housingAssociation: true, shareholder: false },
                { name: 'Interior maintenance, painting and varnishing of windows', housingAssociation: false, shareholder: true },
                { name: 'Glazing', housingAssociation: true, shareholder: false },
                { name: 'Seals (standard seals)', housingAssociation: true, shareholder: false },
                { name: 'Hardware (hinges, locks, opening devices)', housingAssociation: true, shareholder: true },
                { name: 'Venetian blinds installed between or on the inside of frames', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'hvac_fixtures',
            title: null,
            headers: {
                firstColumn: 'HVAC FIXTURES AND EQUIPMENT',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Bathtubs and basins (washbasin, bathtub, whirlpool bath, shower tray, kitchen sink and worktop)', housingAssociation: false, shareholder: true },
                { name: 'Bathtub/basin trap and floor drain pipe', housingAssociation: true, shareholder: false },
                { name: 'Taps and mixers (excl. shareholder-installed specials)', housingAssociation: true, shareholder: true },
                { name: 'Cabinet sauna, steam cabinet and steam sauna', housingAssociation: false, shareholder: true },
                { name: 'Hoses and connection pipes and hand showers incl. dishwasher and washing machine fill and drain hoses with connections and bidet sprays', housingAssociation: false, shareholder: true },
                { name: 'Valves (radiator, shut-off and safety valves)', housingAssociation: true, shareholder: false },
                { name: 'WC pan, basin, cistern and flush valve (excl. shareholder-installed specials)', housingAssociation: true, shareholder: true },
                { name: 'Hot water cylinder (company-installed)', housingAssociation: true, shareholder: false },
                { name: 'Dishwasher and washing machine (shareholder-installed)', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'ventilation',
            title: null,
            headers: {
                firstColumn: 'MECHANICAL EXHAUST VENTILATION SYSTEM',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Fresh air vent, exterior and interior parts — repair and replacement', housingAssociation: true, shareholder: false },
                { name: 'Filters (outdoor air, replacement air and fresh air vent) — cleaning and replacement (interior side)', housingAssociation: false, shareholder: true },
                { name: 'Filters (outdoor air, replacement air and fresh air vent) — cleaning and replacement (exterior side)', housingAssociation: true, shareholder: false },
                { name: 'Cooker hood grease filter (cleaning and replacement)', housingAssociation: false, shareholder: true },
                { name: 'Cooker hood (connected to exhaust duct) — appliance', housingAssociation: true, shareholder: false },
                { name: 'Cooker hood (connected to exhaust duct) — light and switch', housingAssociation: false, shareholder: true },
                { name: 'Extractor fan with filters (fan-equipped)', housingAssociation: false, shareholder: true },
                { name: 'Ventilation automation and controls and switches', housingAssociation: true, shareholder: false },
            ],
        },
        {
            id: 'electrical',
            title: null,
            headers: {
                firstColumn: 'ELECTRICAL SYSTEMS',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Apartment internal power and data cables (fixed network)', housingAssociation: true, shareholder: false },
                { name: 'Group distribution board / sub-distribution board (fuse board)', housingAssociation: true, shareholder: false },
                { name: 'Switch (breaker) and socket outlet', housingAssociation: true, shareholder: false },
                { name: 'Socket outlet cover plate', housingAssociation: false, shareholder: true },
                { name: 'Car heating socket with accessories', housingAssociation: true, shareholder: false },
                { name: 'Fuse, fluorescent tube, lamp, LED, fibre light', housingAssociation: false, shareholder: true },
                { name: 'Fixed luminaires (excl. shareholder-installed)', housingAssociation: true, shareholder: true },
                { name: 'Electric sauna heater (shareholder-installed)', housingAssociation: false, shareholder: true },
            ],
        },
        {
            id: 'antenna_gas_other',
            title: null,
            headers: {
                firstColumn: 'Other systems',
                housingAssociation: 'Housing company',
                shareholder: 'Shareholder',
            },
            rows: [
                { name: 'Shared antenna equipment', housingAssociation: true, shareholder: false },
                { name: 'Antenna outlet', housingAssociation: true, shareholder: false },
                { name: 'Antenna outlet cover plate', housingAssociation: false, shareholder: true },
                { name: 'Gas pipes', housingAssociation: true, shareholder: false },
                { name: 'Letterbox', housingAssociation: true, shareholder: false },
                { name: 'Smoke detector (company-installed basic system)', housingAssociation: true, shareholder: false },
                { name: 'Smoke detector (shareholder-installed or batteries)', housingAssociation: false, shareholder: true },
            ],
        },
    ],
};

export default responsibilityTablesEn;
