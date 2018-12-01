export class Criteria {
    currentPage: number;
    totalPage: number;
    itemPerPage: number;
    sortColumn: string;
    sortDirection: string;
    searchText: string;

    constructor(private current?: number, private ipp?: number) {
        if (current == null) current = 1;
        this.currentPage = current;
        if (ipp == null)
            this.itemPerPage = 20;
        else this.itemPerPage = ipp;
        this.totalPage = 0;
        this.searchText = "";
    }

}