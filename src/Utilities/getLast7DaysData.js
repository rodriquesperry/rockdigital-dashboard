export const getLast7DaysData = () => {
	const data = [];
	const today = new Date();
  let total = 0;
  let totalSent = 0;

	for (let i = 6; i >= 0; i--) {
		const date = new Date();
		date.setDate(today.getDate() - i);
		const options = { month: 'short', day: 'numeric' };
    let number = Math.floor(Math.random() * 300);    

		data.push({
			week: date.toLocaleDateString('en-US', options).split('T')[0],
			desktop: number,
      mobile: Math.floor(Math.random() * 200),
		});
    
    total += number;
	}  
  totalSent += 100;
	return { data, total, totalSent};
};