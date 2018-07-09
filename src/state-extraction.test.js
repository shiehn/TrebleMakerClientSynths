import StateExtractor from './state-extractor';

describe('StateExtractor', () => {
    it('should return selected pattern', () => {
        var patterns = [{"name": "a", "selected": false, "color": "#42f4a7"}, {"name": "b", "selected": true, "color": "##7d42f4"}];
        expect(StateExtractor.getSelectedPattern(patterns).name).toEqual("b");
    });
});