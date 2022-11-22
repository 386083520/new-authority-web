export function resetForm (refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields()
  }
}

export function addDateRange (params, dateRange) {
  console.log('gsdparams', params)
  const search = params
  search.params = typeof (search.params) === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {}
  dateRange = Array.isArray(dateRange) ? dateRange : []
  search.params.beginTime = dateRange[0]
  search.params.endTime = dateRange[1]
  return search
}
