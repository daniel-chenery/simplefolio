export class SkillList {
    private _wrapper = 'skill__wrapper';
    private _stacked = '--stacked';
    private _target: HTMLAnchorElement | null = document.querySelector('[href="#list-view"]');

    public isStacked: boolean = false;

    public initalise(): void {
        this._target?.addEventListener('click', (e) => {
            e.preventDefault();

            if (this.isStacked) {
                this.unstack();
            } else {
                this.stack();
            }

        });
    }

    private stack(): void {
        const icon = this.getIcon();
        const tree = document.querySelector(`.${this._wrapper}`);
        tree?.classList.add(`${this._wrapper}${this._stacked}`)

        if (icon) {
            icon.textContent = 'grid_off';
        }

        this.isStacked = true;
    }

    private unstack(): void {
        const icon = this.getIcon();
        const tree = document.querySelector(`.${this._wrapper}`);
        tree?.classList.remove(`${this._wrapper}${this._stacked}`)

        if (icon) {
            icon.textContent = 'block';
        }

        this.isStacked = false;
    }

    private getIcon(): HTMLElement | null | undefined {
        return this._target?.classList.contains('material-symbols-outlined') ?
            this._target :
            this._target?.querySelector('.material-symbols-outlined');
    }


}