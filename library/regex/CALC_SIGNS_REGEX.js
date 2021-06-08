const OPERATORS_REGEX =
/(\+)|(-)|(\*)|(×)|(\d*\s?x\s?\d*)|(\/)|(÷)|(:)/g

const NEGATIVE_NUMBER_REGEX =
/((\+)|(-)|(\*)|(×)|(\d*\s?x\s?\d*)|(\/)|(÷)|(:))-/g

const POWER_REGEX = /(\d*²)|(\d*\^\d*)|(\d*n\d*)/g

export { OPERATORS_REGEX, POWER_REGEX, NEGATIVE_NUMBER_REGEX }
