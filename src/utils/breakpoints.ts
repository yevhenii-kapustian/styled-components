interface Breakpoints {
    sm: string,
    md: string,
    bg: string
}

interface ScreenType {
    sm: string,
    md: string,
    bg: string
}

const breakpoints: Breakpoints = {
    sm: "540px",
    md: "768px",
    bg: "1300px"
}

export const screens:ScreenType = {
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    bg: `(min-width: ${breakpoints.bg})`,
}
