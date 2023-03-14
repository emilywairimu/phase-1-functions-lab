function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const distanceInBlocks = Math.abs(destinationBlock - startBlock);
    return distanceInBlocks * 264;
  }
  
  function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
      return pickupLocation - 42;
    } else if (pickupLocation < 42) {
      return 42 - pickupLocation;
    } else {
      return 0;
    }
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
 
  
  
  
  
  
  