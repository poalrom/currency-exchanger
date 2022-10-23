export function inputToNumber(input?: string): number {
    if (!input) {
        return 0;
    }

    const result = Number(input.replace(",", ".").replace(/\s+/, ""));

    return Number.isNaN(result) ? 0 : result;
}
