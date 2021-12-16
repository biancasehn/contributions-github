import daysOneYear from "../../services/daysOneYear";

const checkContributionLevel = () => {
  let q1, q3, l1, l2, l3;
  const sortedCollection = [
    ...new Set(daysOneYear.map((obj) => obj.contributions)),
  ].sort((a, b) => a - b);

  if (
    ((sortedCollection.length - 1) / 4) % 1 === 0 ||
    (sortedCollection.length / 4) % 1 === 0
  ) {
    q1 =
      (1 / 2) *
      (sortedCollection[Math.floor(sortedCollection.length / 4) - 1] +
        sortedCollection[Math.floor(sortedCollection.length / 4)]);
    q3 =
      (1 / 2) *
      (sortedCollection[Math.ceil((sortedCollection.length * 3) / 4) - 1] +
        sortedCollection[Math.ceil((sortedCollection.length * 3) / 4)]);
  } else {
    q1 = sortedCollection[Math.floor(sortedCollection.length / 4)];
    q3 = sortedCollection[Math.floor((sortedCollection.length * 3) / 4)];
  }
  
  const iqr = q3 - q1;
  const maxValue = q3 + iqr * 1.5;

  if (sortedCollection[sortedCollection.length - 1] <= maxValue) {
    let removedOutliers = sortedCollection.slice(0, iqr);
    return {
      l3: iqr,
      l2: removedOutliers[Math.floor((removedOutliers.length * 2) / 3 - 1)],
      l1: removedOutliers[Math.floor(removedOutliers.length / 3 - 1)],
    };
  }
  return {
    l1: Math.floor(maxValue / 4),
    l3: Math.floor((maxValue * 3) / 4),
    l2: l3 - l1,
  };
};

export default checkContributionLevel;
