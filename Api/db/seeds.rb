# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.create(name: 'Diego Cuevas', email: 'diego@gmail.com', password: '123456')
User.create(name: 'Marieth', email: 'marieth@gmail.com', password: '123456')
User.create(name: 'Angie', email: 'angie@gmail.com', password: '123456')

supervisor_1= User.create(rol: 'Supervisor', name: 'Nina',lastName: 'Suarez', email: 'nina@shift.com', password: '123456')
user_1= User.create(rol: 'FrontDesk', name: 'Alina',lastName: 'Torres', email: 'alina@shift.com', password: '123456')
user_2= User.create(rol: 'FrontDesk', name: 'Lina',lastName: 'Delgado', email: 'lina@shift.com', password: '123456')


schedule_1 = Schedule.create(
    month: "Julio",
    user_id: 1,
    workShifts: [
      {
        date:"01-07-19",
        shift_id: 4 # off
      },
      {
        date: "02-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "03-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "04-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "05-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "06-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "07-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "08-07-19",
        shift_id: 4 # off
      },
      {
        date: "09-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "10-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "11-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "12-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "13-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "14-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "15-07-19",
        shift_id: 4 # off
      },
      {
        date: "16-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "17-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "18-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "19-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "20-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "21-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "22-07-19",
        shift_id: 4 # off
      },
      {
        date: "23-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "24-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "25-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "26-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "27-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "28-07-19",
        shift_id: 1 # mañana
      },
      {
        date: "29-07-19",
        shift_id: 4 # off
      },
      {
        date: "30-07-19",
        shift_id:  1 # mañana
      },
      {
        date: "31-07-19",
        shift_id:  1 # mañana
      }
    ]
  )

  schedule_2 = Schedule.create(
    month: "Julio",
    user_id: 2,
    workShifts: [
      {
        date: "01-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "02-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "03-07-19",
        shift_id: 4 # off
      },
      {
        date: "04-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "05-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "06-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "07-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "08-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "09-07-19",
        shift_id:  2 # tarde
      },
      {
        date: "10-07-19",
        shift_id: 4 # off
      },
      {
        date: "11-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "12-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "13-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "14-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "15-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "16-07-19",
        shift_id:  2 # tarde
      },
      {
        date: "17-07-19",
        shift_id: 4 # off
      },
      {
        date: "18-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "19-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "20-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "21-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "22-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "23-07-19",
        shift_id:  2 # tarde
      },
      {
        date: "24-07-19",
        shift_id: 4 # off
      },
      {
        date: "25-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "26-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "27-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "28-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "29-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "30-07-19",
        shift_id: 2 # tarde
      },
      {
        date: "31-07-19",
        shift_id: 4 # off
      }
    ]
  )

  schedule_3 = Schedule.create(
    month: "Agosto",
    user_id: 1,
    workShifts: [
      {
        date:"01-08-19",
        shift_id:  4 # off
      },
      {
        date: "02-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "03-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "04-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "05-08-19",
        shift_id: 4 # off
      },
      {
        date: "06-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "07-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "08-08-19",
        shift_id: 4 # off
      },
      {
        date: "09-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "10-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "11-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "12-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "13-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "14-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "15-08-19",
        shift_id: 4 # off
      },
      {
        date: "16-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "17-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "18-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "19-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "20-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "21-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "22-08-19",
        shift_id: 4 # off
      },
      {
        date: "23-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "24-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "25-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "26-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "27-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "28-08-19",
        shift_id: 2 # tarde
      },
      {
        date: "29-08-19",
        shift_id: 4 # off
      },
      {
        date: "30-08-19",
        shift_id:  2 # tarde
      },
      {
        date: "31-08-19",
        shift_id:  2 # tarde
      }
    ]
  )

  schedule_2 = Schedule.create(
    month: "Agosto",
    user_id: 2,
    workShifts: [
      {
        date: "01-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "02-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "03-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "04-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "05-08-19",
        shift_id: 4 # off
      },
      {
        date: "06-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "07-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "08-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "09-08-19",
        shift_id:  1 # mañana
      },
      {
        date: "10-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "11-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "12-08-19",
        shift_id:  4 # off
      },
      {
        date: "13-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "14-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "15-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "16-08-19",
        shift_id:  1 # mañana
      },
      {
        date: "17-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "18-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "19-08-19",
        shift_id:  4 # off
      },
      {
        date: "20-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "21-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "22-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "23-08-19",
        shift_id:  1 # mañana
      },
      {
        date: "24-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "25-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "26-08-19",
        shift_id:  4 # off
      },
      {
        date: "27-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "28-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "29-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "30-08-19",
        shift_id: 1 # mañana
      },
      {
        date: "31-08-19",
        shift_id: 1 # mañana
      }
    ]
  )
