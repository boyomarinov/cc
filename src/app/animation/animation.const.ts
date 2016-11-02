export const animations: any = {
    fadeIn: {
        startingStyles: {
            styles: [{}]
        },
        keyframes: [
            {
                offset: 0,
                styles: {
                    styles: [{
                        transform: 'translateX(100px)',
                        opacity: 0
                    }]
                }
            },
            {
                offset: 1,
                styles: {
                    styles: [{
                        transform: 'translateX(0)',
                        opacity: 1
                    }]
                }
            }
        ]
    },
    fadeOut: {
        startingStyles: {
            styles: [{}]
        },
        keyframes: [
            {
                offset: 0,
                styles: {
                    styles: [{
                        transform: 'translateX(0)',
                        opacity: 1
                    }]
                }
            },
            {
                offset: 1,
                styles: {
                    styles: [{
                        transform: 'translateX(100px)',
                        opacity: 0
                    }]
                }
            }
        ]
    },
};