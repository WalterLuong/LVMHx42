export const fadeIn = (direction: string, delay: number) => {
    return {
        hidden: {
            opacity: 0,
            x: direction == 'left' ? 80 : direction == 'right' ? -80 : 0,
            y: direction == 'up' ? 80 : direction == 'down' ? -80 : 0,
        },
        show: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'tween',
                delay: delay,
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    }
}

export const navAnim = {
    hidden: {
        opacity: 0,
        y: 100,
        rotate: 0,
    },
    show: {
        opacity: 1,
        y: 0,
        rotate: 360,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}