import Task from '../components/Task'

export default function TaskList(props) {


  return (
    <ul className="grid grid-cols-3 gap-6 hover:grod-cols-6 p-8">
      <li><Task
        key={1}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={2}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={3}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={4}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={1}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={2}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={3}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={4}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={1}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={2}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={3}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
      <li><Task
        key={4}
        name={'Lawn Mowing'}
        description={'I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.'}
        category={'House Work'}
        user={1}
        />
      </li>
    </ul>
  );
}