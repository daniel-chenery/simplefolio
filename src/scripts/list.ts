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
        const tree = document.querySelector(`.${this._wrapper}`);
        tree?.classList.add(`${this._wrapper}${this._stacked}`)

        if (this._target) {
            this._target.text = 'grid_off';
        }

        this.isStacked = true;
    }

    private unstack(): void {
        const tree = document.querySelector(`.${this._wrapper}`);
        tree?.classList.remove(`${this._wrapper}${this._stacked}`)

        if (this._target) {
            this._target.text = 'grid_on';
        }

        this.isStacked = false;
    }


}