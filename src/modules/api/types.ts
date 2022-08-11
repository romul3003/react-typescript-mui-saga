
export type Job = {
  id: number,
  jobId: string,
  title: string,
}

export type Employee = {
  id: string,
  createdAt: string,
  avatar: string,
  name: string,
  email: string,
  companyName: string,
  address: string,
  phone: string,
  job: string,
  about: string,
}

export type Data = Job[] | Employee[]
