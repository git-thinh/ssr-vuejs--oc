import _ from 'lodash';
import { reactive } from 'vue'

export const __callback = reactive({
    app_id: null,
    items: {},
    paths: {},
    update: function (id, fn) {
        this.items[id] = fn;
    },
    updatePath: function (path, id) {
        //console.log(path, id);
        if (!this.paths.hasOwnProperty(path)) this.paths[path] = [id];
        else {
            const a = this.paths[path],
                notExist = _.findIndex(a, o => o === id) === -1;
            if (notExist) a.push(id);
        }
    },
    clearAll: function () {
        this.items = {};
    },
    callNotIds: function (m, notIDs) {
        if (m === null || m.callback === null) return;
        //console.log(location.pathname);
        //let a = Object.keys(items);
        let a = this.paths[location.pathname] || [];
        if (a.length > 0) {
            const items = this.items;
            a = _.filter(a, o => items.hasOwnProperty(o) && typeof items[o] === 'function');
            if (notIDs != null && Array.isArray(notIDs) && notIDs.length > 0)
                a = _.filter(a, o => _.findIndex(notIDs, j => j === o) === -1);

            if (this.app_id
                && _.findIndex(a, o => o === this.app_id) === -1)
                a.push(this.app_id);

            //console.log(a);

            const json = JSON.stringify(m);
            for (let i = 0; i < a.length; i++) {
                const o = JSON.parse(json), id = a[i];
                const fn = items[id];
                if (fn != null)
                    setTimeout(function (f) { f(o); }, 1, fn);
            }
        }
    }
});