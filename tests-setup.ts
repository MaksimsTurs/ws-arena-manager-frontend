//NPM Packages
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest/dist/index.js'

afterEach(() => cleanup())