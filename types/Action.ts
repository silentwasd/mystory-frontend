export default interface Action {
    id: number,
    name: string,
    type: string,
    move_to?: number
}