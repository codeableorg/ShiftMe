# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@user_1= User.create(name: 'Diego Cuevas', email: 'diego@gmail.com', password: '123456')
@user_2= User.create(name: 'Marieth', email: 'marieth@gmail.com', password: '123456')
@user_3= User.create(name: 'Angie', email: 'angie@gmail.com', password: '123456')
@user_4= User.create(rol: 'FrontDesk', name: 'Alina',lastName: 'Torres', email: 'alina@shift.com', password: '123456')
@user_5= User.create(rol: 'FrontDesk', name: 'Lina',lastName: 'Delgado', email: 'lina@shift.com', password: '123456')
supervisor_1= User.create(rol: 'Supervisor', name: 'Nina',lastName: 'Suarez', email: 'nina@shift.com', password: '123456')

@shift_1= Shift.create(shift_type: "morning")
@shift_2= Shift.create(shift_type: "afternoon")
@shift_3= Shift.create(shift_type: "night")
@shift_4= Shift.create(shift_type: "off")

@request_1 = Request.create(rol: 'FrontDesk', requester_id: @user_1.id, requested_id: @user_2.id, status: 'agree', current_Shift_id: @shift_1.id, requested_Shift_id: @shift_2.id )
@request_2 = Request.create(rol: 'FrontDesk', requester_id: @user_3.id, requested_id: @user_4.id, status: 'agree', current_Shift_id: @shift_1.id, requested_Shift_id: @shift_3.id )
@request_3 = Request.create(rol: 'FrontDesk', requester_id: @user_4.id, requested_id: @user_5.id, current_Shift_id: @shift_2.id, requested_Shift_id: @shift_1.id )
@request_4 = Request.create(rol: 'FrontDesk', requester_id: @user_5.id, requested_id: @user_1.id, current_Shift_id: @shift_2.id, requested_Shift_id: @shift_3.id )


schedule_1 = Schedule.create(
    month: "Julio",
    user_id: 1,
    workShifts: [
             { date: "2019/07/01", shift_id: 4 },
             { date: "2019/07/02", shift_id: 1 },
             { date: "2019/07/03", shift_id: 1 },
             { date: "2019/07/04", shift_id: 1 },
             { date: "2019/07/05", shift_id: 1 },
             { date: "2019/07/06", shift_id: 1 },
             { date: "2019/07/07", shift_id: 1 },
             { date: "2019/07/08", shift_id: 4 },
             { date: "2019/07/09", shift_id: 1 },
             { date: "2019/07/10", shift_id: 1 },
             { date: "2019/07/11", shift_id: 1 },
             { date: "2019/07/12", shift_id: 1 },
             { date: "2019/07/13", shift_id: 1 },
             { date: "2019/07/14", shift_id: 1 },
             { date: "2019/07/15", shift_id: 4 },
             { date: "2019/07/16", shift_id: 1 },
             { date: "2019/07/17", shift_id: 1 },
             { date: "2019/07/18", shift_id: 1 },
             { date: "2019/07/19", shift_id: 1 },
             { date: "2019/07/20", shift_id: 1 },
             { date: "2019/07/21", shift_id: 1 },
             { date: "2019/07/22", shift_id: 4 },
             { date: "2019/07/23", shift_id: 1 },
             { date: "2019/07/24", shift_id: 1 },
             { date: "2019/07/25", shift_id: 1 },
             { date: "2019/07/26", shift_id: 1 },
             { date: "2019/07/27", shift_id: 1 },
             { date: "2019/07/28", shift_id: 1 },
             { date: "2019/07/29", shift_id: 4 },
             { date: "2019/07/30", shift_id: 1 },
             { date: "2019/07/31", shift_id: 1 }
    ]
  )

  schedule_2 = Schedule.create(
    month: "Julio",
    user_id: 2,
    workShifts: [
      { date: "2019/07/01", shift_id: 2 },
      { date: "2019/07/02", shift_id: 2 },
      { date: "2019/07/03", shift_id: 4 },
      { date: "2019/07/04", shift_id: 2 },
      { date: "2019/07/05", shift_id: 2 },
      { date: "2019/07/06", shift_id: 2 },
      { date: "2019/07/07", shift_id: 2 },
      { date: "2019/07/08", shift_id: 2 },
      { date: "2019/07/09", shift_id: 2 },
      { date: "2019/07/10", shift_id: 4 },
      { date: "2019/07/11", shift_id: 2 },
      { date: "2019/07/12", shift_id: 2 },
      { date: "2019/07/13", shift_id: 2 },
      { date: "2019/07/14", shift_id: 2 },
      { date: "2019/07/15", shift_id: 2 },
      { date: "2019/07/16", shift_id: 2 },
      { date: "2019/07/17", shift_id: 4 },
      { date: "2019/07/18", shift_id: 2 },
      { date: "2019/07/19", shift_id: 2 },
      { date: "2019/07/20", shift_id: 2 },
      { date: "2019/07/21", shift_id: 2 },
      { date: "2019/07/22", shift_id: 2 },
      { date: "2019/07/23", shift_id: 2 },
      { date: "2019/07/24", shift_id: 4 },
      { date: "2019/07/25", shift_id: 2 },
      { date: "2019/07/26", shift_id: 2 },
      { date: "2019/07/27", shift_id: 2 },
      { date: "2019/07/28", shift_id: 2 },
      { date: "2019/07/29", shift_id: 2 },
      { date: "2019/07/30", shift_id: 2 },
      { date: "2019/07/31", shift_id: 4 }
    ]
  )

  schedule_3 = Schedule.create(
    month: "Agosto",
    user_id: 1,
    workShifts: [
      { date: "2019/08/01", shift_id: 4 },
      { date: "2019/08/02", shift_id: 2 },
      { date: "2019/08/03", shift_id: 2 },
      { date: "2019/08/04", shift_id: 2 },
      { date: "2019/08/05", shift_id: 4 },
      { date: "2019/08/06", shift_id: 2 },
      { date: "2019/08/07", shift_id: 2 },
      { date: "2019/08/08", shift_id: 4 },
      { date: "2019/08/09", shift_id: 2 },
      { date: "2019/08/10", shift_id: 2 },
      { date: "2019/08/11", shift_id: 2 },
      { date: "2019/08/12", shift_id: 2 },
      { date: "2019/08/13", shift_id: 2 },
      { date: "2019/08/14", shift_id: 2 },
      { date: "2019/08/15", shift_id: 4 },
      { date: "2019/08/16", shift_id: 2 },
      { date: "2019/08/17", shift_id: 2 },
      { date: "2019/08/18", shift_id: 2 },
      { date: "2019/08/19", shift_id: 2 },
      { date: "2019/08/20", shift_id: 2 },
      { date: "2019/08/21", shift_id: 2 },
      { date: "2019/08/22", shift_id: 4 },
      { date: "2019/08/23", shift_id: 2 },
      { date: "2019/08/24", shift_id: 2 },
      { date: "2019/08/25", shift_id: 2 },
      { date: "2019/08/26", shift_id: 2 },
      { date: "2019/08/27", shift_id: 2 },
      { date: "2019/08/28", shift_id: 2 },
      { date: "2019/08/29", shift_id: 4 },
      { date: "2019/08/30", shift_id: 2 },
      { date: "2019/08/31", shift_id: 2 }
    ]
  )

  schedule_4 = Schedule.create(
    month: "Agosto",
    user_id: 2,
    workShifts: [
      { date: "2019/08/01", shift_id: 1 },
        { date: "2019/08/02", shift_id: 1 },
        { date: "2019/08/03", shift_id: 1 },
        { date: "2019/08/04", shift_id: 1 },
        { date: "2019/08/05", shift_id: 4 },
        { date: "2019/08/06", shift_id: 1 },
        { date: "2019/08/07", shift_id: 1 },
        { date: "2019/08/08", shift_id: 1 },
        { date: "2019/08/09", shift_id: 1 },
        { date: "2019/08/10", shift_id: 1 },
        { date: "2019/08/11", shift_id: 1 },
        { date: "2019/08/12", shift_id: 4 },
        { date: "2019/08/13", shift_id: 1 },
        { date: "2019/08/14", shift_id: 1 },
        { date: "2019/08/15", shift_id: 1 },
        { date: "2019/08/16", shift_id: 1 },
        { date: "2019/08/17", shift_id: 1 },
        { date: "2019/08/18", shift_id: 1 },
        { date: "2019/08/19", shift_id: 4 },
        { date: "2019/08/20", shift_id: 1 },
        { date: "2019/08/21", shift_id: 1 },
        { date: "2019/08/22", shift_id: 1 },
        { date: "2019/08/23", shift_id: 1 },
        { date: "2019/08/24", shift_id: 1 },
        { date: "2019/08/25", shift_id: 1 },
        { date: "2019/08/26", shift_id: 4 },
        { date: "2019/08/27", shift_id: 1 },
        { date: "2019/08/28", shift_id: 1 },
        { date: "2019/08/29", shift_id: 1 },
        { date: "2019/08/30", shift_id: 1 },
        { date: "2019/08/31", shift_id: 1 }
    ]
  )
