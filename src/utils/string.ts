export function commaSeparator(number : number | string) : string {

    if (typeof number === "string")
        try {
            number = parseInt(number);
        } catch (e) {
            throw new Error("Invalid number");
        }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}