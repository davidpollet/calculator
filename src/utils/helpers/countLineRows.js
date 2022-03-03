const countLineRows = string => {
  return (string && string.match(/\n/g)?.length + 1) || 1
}

export default countLineRows
