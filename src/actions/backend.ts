'use server'
export const handleConfirm = async (invoice:object) => {
  try{

    const response = await fetch('http://localhost:3000/api/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoice),
    })
    const data = await response.json()
    if(data.status !== 200) {
      const status:object = { status: 'error', message: 'Error in Confirming Order', code: 401 }
      return status
    }
    const status:object = { status: 'success', message: 'Order confirmed successfully', code: 200 }
    return status
  }catch(error) {
      console.error('Error:', error);
    }
  };

export const marketOrders = async () => {
  try {
    const response = await fetch('http://192.168.34.173:8080/buyer/get-all-orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error:'+ error as string)
  }
}