export function getDrawerDirection(direction: string, isClosed: boolean): string {
    if(direction === 'left') {
        if(isClosed) {
            return " -translate-x-full left-0";
        }else {
            return " translate-x-0 left-0";
        }
    }else {
        if(isClosed) {
            return " translate-x-full right-0";
        }else {
            return " -translate-x-0 right-0";
        }
    }
}