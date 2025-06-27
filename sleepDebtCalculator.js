function getSleepHours(day) {

}

const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 9;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 10;
        break;
      case 'saturday':
        return 12;
        break;
      case 'sunday':
        return 11;
        break;
      default:
        console.log('Expected day as input.');
    }
  };
  
  // testing - can be deleted
  console.log(getSleepHours('tuesday')); // should print the # hours assigned to tuesday
  
  const getActualSleepHours = () => 
      getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  // testing - can be deleted
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  // testing - can be deleted
  console.log(getIdealSleepHours()); // if idealHours = 8, should print 56
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week.`)
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week.`)
    }
  };
  
  calculateSleepDebt();
  
  
  /*
  // Extra practice
  // Rewrite getActualSleepHours
  const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
  
  // Rewrite getIdealSleepHours
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  // Update calculateSleepDebt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week.`)
    } else {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week.`)
    }
  };
  
  calculateSleepDebt();
  */
  