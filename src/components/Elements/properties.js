export const properties = {
    Button:     {
        size: 15,
        align: true,
        properties: {
            large:   ['btn-lg', 'btn-sm'],
            round:   ['btn-br-lg', 'btn-br-sm'],
            inverse: ['btn-inv', 'btn-col']
        },
    },
    Email:      {
        size: 60,
        properties: {
            large:             ['email-lg', 'email-sm'],
            inverse:           ['email-inv', 'email-col'],
            round:             ['email-br-lg', 'email-br-sm']
        }
    },
    Heading:    {
        size: 60,
        properties: {}

    },
    Newsletter: {
        size: 60,
        properties: {
            size:          ['newsletter-lg', 'newsletter-sm'],
            round_corners: ['newsletter-br-lg', 'newsletter-br-sm'],
            // input:         [],
            // align:         [],
            // success:       [],
            // error:         [],
            // button:        [],
            // label:         [],
            // email:         [],
            // large:         [],
            inverse:       ['newsletter-inv', 'newsletter-col'],
            round:         ['newsletter-br-lg', 'newsletter-br-sm']
        }
    },
    Image:      {
        size: 60,
        align: true,
        properties: {}
    },

    Video:     {
        size: 30,
        properties: {}
    },
    Divider:   {
        size: 60,
        properties: {}
    },
    Gallery:   {
        size: 60,
        properties: {}
    },
    Pictogram: {
        size: 10,
        align: true,

        properties: {
            large:   ['icon-lg', 'icon-sm'],
            round:   ['icon-br-lg', 'icon-br-sm'],
            inverse: ['icon-inv', 'icon-col']
        }
    },
    Map:       {
        size: 30,
        properties: {}
    },
    Pricelist: {
        size: 30,
        properties: {}
    },
    Social:    {
        size: 15,
        align: true,
        properties: {
            orientation: ['social-horizontal', 'social-vertical'],
            large:       ['social-lg', 'social-sm'],
            background:  [],
            inverse:     ['social-inv', 'social-col'],
            round:       ['social-br-lg', 'social-br-sm'],
        }
    }
}