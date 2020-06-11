// format objects to array items
export const formatToArrayItems = (obj) =>
  Object.keys(obj).map((item) => {
    const childrenObj =
      (obj[item].child && formatToArrayItems(obj[item].child)) || null;
    return { id: item, children: childrenObj, ...obj[item] };
  });
