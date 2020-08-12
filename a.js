describe('top', () => {
  describe.each(['approve', 'decline'])('inner1', () => {
		beforeEach(() => {
      console.log('set');
		});

		it('renders correctly', () => {
      expect(true).toBeTruthy();
		});
	});

	describe.each(['approve', 'decline'])('inner2', () => {
		beforeEach(() => {
			console.log('set2');
		});

		it('renders correctly 2', () => {
			expect(true).toBeTruthy
		});
	});
});
