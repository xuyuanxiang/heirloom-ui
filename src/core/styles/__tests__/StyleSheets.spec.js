/**
 * @name
 * @description
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/9/5
 */
import StyleSheets from '../StyleSheets';

it('should contain `autoPrefix`', ()=> {
    let styleSheets = new StyleSheets({});
    expect(styleSheets.autoPrefix).toBeDefined();
});

it('should override `userAgent` before', ()=> {
    let styleSheets = new StyleSheets({userAgent: false}, {userAgent: 'all'});
    expect(styleSheets.userAgent).toBe('all');
});