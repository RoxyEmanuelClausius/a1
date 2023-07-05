const { Weapons } = require('@root/data/emoji')

module.exports = {
    wp: {
        list: [
            {
                name: 'Basic',
                emoji: '',
                dura: 30,
                huntConfig: {
                    min: 2,
                    max: 5,
                },
                rates: [
                    {
                        rate: 0.3,
                        name: 'C',
                    },
                    {
                        rate: 0.5,
                        name: 'R',
                    },
                    {
                        rate: 0.6,
                        name: 'E',
                    },
                    {
                        rate: 9,
                        name: 'SR',
                    },
                ],
            },
            {
                name: 'Advance',
                emoji: '',
                dura: 12,
                huntConfig: {
                    min: 5,
                    max: 8,
                },
                rates: [
                    {
                        rate: 0.3,
                        name: 'C',
                    },
                    {
                        rate: 0.7,
                        name: 'R',
                    },
                    {
                        rate: 1,
                        name: 'E',
                    },
                    {
                        rate: 9,
                        name: 'SR',
                    },
                ],
            },
            {
                name: 'Special',
                emoji: '',
                dura: 60,
                huntConfig: {
                    min: 8,
                    max: 12,
                },
                rates: [
                    {
                        rate: 0.3,
                        name: 'C',
                    },
                    {
                        rate: 0.7,
                        name: 'R',
                    },
                    {
                        rate: 0.88,
                        name: 'E',
                    },
                    {
                        rate: 9,
                        name: 'SR',
                    },
                ],
            },
        ],
    },

    wpp: [{
        name: `${Weapons.basic} Basic(s)`,
        price: 700
    },
    {
        name: `${Weapons.advance} Advance(s)`,
        price: 2500,
    },
    {
        name: `${Weapons.special} Special(s)`,
        price: 5500
    }],

}