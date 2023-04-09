/**
 * Abstraction of an Element of the Periodic Table.
 */

export class PeriodicTableElement {

    /**
     * The unique atomic number of this element.
     */
    atomicNumber: number;

    /**
     * Name of this Element.
     */
    name: string;

    /**
     * Symbol of this Element.
     */
    symbol: string;

    /**
     * The atomic weight of this Element.
     * The weight is represented by a string since it may contain parentheses and square brackets.
     */
    weight!: string;

    /**
     * Group of this Element.
     * Elements are in a group from 1 to 18 or they are not in a group at all (Lanthanides for example).
     */
    group!: string;
    
    /**
     * Period of this Element.
     * Periods are numbered from 1 to 7.
     */
    period!: string;

    /**
     * Block of this Element.
     * Valid blocks are: s, p, d, f (and hypothetically g).
     */
    block!: string;

    /**
     * Electron configuration of this Element.
     * An example electron configuration is: [He] 2s2 2p1, which is the configuration for Boron.
     */
    electronConfiguration!: string;

    /**
     * Constructs this Element from the supplied atomicNumber, symbol and name.
     * @param atomicNumber The atomic number of this Element.
     * @param symbol The symbol of this Element.
     * @param name The name of this Element.
     */
    constructor (atomicNumber:number, symbol: string, name: string) {
        this.atomicNumber = atomicNumber;
        this.symbol = symbol;
        this.name = name;
    }

    
}